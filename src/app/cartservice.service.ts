import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root', // Ensures it's a singleton
})
export class CartService {
  private cart: any[] = [];

  constructor(private http: HttpClient) {}

  loadProducts() {
    this.http.get<any[]>('assets/products.json').subscribe((data) => {
      this.cart = data;
    });
  }

  addProduct(product: any) {
    this.cart.push(product);
  }

  getCart() {
    return this.cart;
  }

  clearCart() {
    this.cart = [];
  }
  removeProduct(index: number) {
    this.cart.splice(index, 1);
  }
}