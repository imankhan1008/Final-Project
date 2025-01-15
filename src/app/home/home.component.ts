import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../cartservice.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  products: any[] = []; // Define the products property

  constructor(
    private http: HttpClient,
    private cartService: CartService,
    private router: Router
  ) {}

  ngOnInit() {
    // Fetch product data from the JSON file or mock server
    this.http.get<any[]>('assets/products.json').subscribe((data) => {
      this.products = data;
    });
  }
  viewDetails() {
    this.router.navigate(['/products']);
  }

  buyNow(product: any) {
    this.cartService.addProduct(product); // Add the product to the cart
    this.router.navigate(['/cart']); // Navigate to the cart page
  }
addtoCart(){
  this.router.navigate(['/cart']);
}
}