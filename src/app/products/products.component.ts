import { Component, OnInit } from '@angular/core';
import { Product, ProductService } from '../product.service';
import { Router, RouterModule } from '@angular/router';
import { CartService } from '../cartservice.service';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [RouterModule,CommonModule, FormsModule],
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products: Product[] = [];

  constructor(
    private productService: ProductService,
    private cartService: CartService,
    private router: Router,
    private http: HttpClient
  ) {}

  ngOnInit(): void {
    this.loadProducts();
  }

  loadProducts(): void {
    this.productService.getProducts().subscribe((data) => {
      this.products = data;
    });
  }

  buyNow(product: any) {
    this.cartService.addProduct(product);
    this.router.navigate(['/cart']); // Navigate to cart page
  }

  addToCart(product: any) {
    this.cartService.addProduct(product);
    this.router.navigate(['/cart']);
  }

 
}
