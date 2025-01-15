import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { Product, ProductService } from '../product.service';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { EventEmitter } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { OrderSummaryService } from '../order-summary.service';


@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [RouterModule, CommonModule, HttpClientModule,FormsModule],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css',
  changeDetection :ChangeDetectionStrategy.OnPush,
})
export class ProductDetailsComponent implements OnInit {
  @Input() customerDetails: any;  // Define customerDetails as an input
  @Input() products: any;      
  
  orderSummary: any = {};


  constructor(private router: Router,
    private route: ActivatedRoute,
    private orderSummaryService: OrderSummaryService
  ) {}
    

  ngOnInit(): void {
    this.orderSummaryService.orderSummary$.subscribe((data: any) => {
      if (data && data !== this.orderSummary) {
        this.orderSummary = data;
      }
    });
  
  }
}
  
  
  

