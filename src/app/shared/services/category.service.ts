import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { ICart } from 'src/models/cart-model';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  updateCartValue: BehaviorSubject<ICart[]> = new BehaviorSubject<ICart[]>([]);

  constructor() { }

  updateCart(cartValue: ICart[]) {
     this.updateCartValue.next(cartValue);
  }

}
