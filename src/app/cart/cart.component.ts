import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { CartService } from '../cartservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent implements OnInit {
   
    // Logic to handle the cart items, e.g., get data from local storage or service
    cart: any[] = [];  
    constructor(private cartService: CartService,
      private router: Router
    ) { }
    
    ngOnInit() {
      this.cart = this.cartService.getCart();
    }
    removeFromCart(index: number) {
      this.cartService.removeProduct(index);
      this.cart = this.cartService.getCart(); // Update the local cart
    }
  
    clearCart() {
      this.cartService.clearCart();
      this.cart = [];
    }

    getTotal() {
      return this.cart.reduce((total, item) => total + item.price, 0);
    }

    proceedToCheckout() {
      this.router.navigate(['/checkout']);
    }
  
  }

