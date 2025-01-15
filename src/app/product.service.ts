import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';


export interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  description: string;


}

@Injectable({
  providedIn: 'root',

})
export class ProductService {
  private productUrl = 'assets/products.json';
  constructor(private http: HttpClient) { console.log('ProductService initialized'); }

  getProducts():Observable <Product[]> {
    return this.http.get<Product[]>('assets/products.json');
  }

  getProductById(id: number): Observable<Product> {
    return this.http.get<Product[]>('assets/products.json').pipe(
      map((products) => products.find((product) => product.id === id)!)
    );
  }
 
  
}

