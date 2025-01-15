import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrderSummaryService {

  private orderSummarySubject = new BehaviorSubject<any>(null);
  orderSummary$ = this.orderSummarySubject.asObservable();

  // Method to set the order summary
  setOrderSummary(data: any): void {
    this.orderSummarySubject.next(data);
  }

  // Method to get the order summary (alternative to using the observable)
  getOrderSummary(): Observable<any> {
    return this.orderSummary$;
  }
}
