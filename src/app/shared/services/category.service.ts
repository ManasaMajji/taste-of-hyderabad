import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of, Subject } from 'rxjs';
import { ICart } from 'src/models/cart-model';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  updateCartValue: BehaviorSubject<ICart[]> = new BehaviorSubject<ICart[]>([]);

  constructor(private httpReq: HttpClient) { }

  updateCart(cartValue: ICart[]) {
     this.updateCartValue.next(cartValue);
  }

  placeOrder(cartItems: ICart[]) {
    console.log(cartItems)
    let headers = {
      headers: new HttpHeaders({
      'content-type': 'application/json'
    })
    };
    return this.httpReq.post("http://localhost:3000/email",cartItems, headers)
  }

}
