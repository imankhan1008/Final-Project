import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { CartService } from '../cartservice.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ProductDetailsComponent } from '../product-details/product-details.component';
import { OrderSummaryService } from '../order-summary.service';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-checkout',
  standalone: true,
  imports: [CommonModule, FormsModule,ReactiveFormsModule, ProductDetailsComponent],
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.css'
})
export class CheckoutComponent  implements OnInit{
  customerForm !: FormGroup;
  products: any[] = [];
 

  orderSummary: any = {};

  cart: any[] = [];
  customer = {
    name: '',
    email: '',
    address: ''
  };

  constructor(private cartService: CartService,
    private productService: ProductService,
    private router: Router,
    private fb: FormBuilder,
    private orderSummaryService: OrderSummaryService
    
) 
   {
    this.customerForm = this.fb.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      address: ['', [Validators.required]],
      apartment: [''],
      postalCode: ['', [Validators.required]],
      paymentMethod: ['Cash on Delivery', [Validators.required]]
    });
  }


  ngOnInit(){
    this.cart = this.cartService.getCart();
    this.orderSummaryService.getOrderSummary().subscribe(
      (data) => {
        this.orderSummary = data;  // Assign the fetched data to the orderSummary property
      },
      (error) => {
        console.error('Error fetching order summary data:', error);
      }
    );
  }
  
  
  
 
  
  removeFromCart(index: number) {
    this.cartService.removeProduct(index);
    this.cart = this.cartService.getCart();
  }


  getTotal() {
    return this.cart.reduce((total, item) => total + item.price, 0);
  }
  onSubmit1() {
    console.log('Customer Details:', this.customer);

    // Redirect to a confirmation or order summary page
    alert('Checkout Successful! Your order is being processed.');
    this.router.navigate(['/']);
  }
  onSubmit(): void {
    this.orderSummary = { ...this.orderSummary };


    // Here, you can perform any validation or processing on the form data
    console.log('Form submitted:', this.orderSummary);

    try {
      // Ensure this route does not recursively navigate or trigger reinitialization
      this.router.navigate(['/product-details'], { state: { data: this.orderSummary } });
    } catch (error) {
      console.error('Form submission error:', error);
    }
  }
   

    // Navigate to the order summary page and pass order details as query params
   
}

  


