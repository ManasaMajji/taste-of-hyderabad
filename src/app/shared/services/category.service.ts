import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of, Subject } from 'rxjs';
import { ICart } from 'src/models/cart-model';
import {db} from "../../../config/firebase-config";
import {addDoc, collection, getDocs} from "firebase/firestore";

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  updateCartValue: BehaviorSubject<ICart[]> = new BehaviorSubject<ICart[]>([]);
  login: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  constructor(private httpReq: HttpClient) { }

  updateCart(cartValue: ICart[]) {
     this.updateCartValue.next(cartValue);
  }

  placeOrder(cartItems: ICart[]) {
    let headers = {
      headers: new HttpHeaders({
      'content-type': 'application/json'
    })
    };
    return this.httpReq.post("http://localhost:3000/email",cartItems, headers)
  }

  getData = async () => {
    const userCollectionRef = collection(db, "userData");
    const data = await getDocs(userCollectionRef);
    const orderData =  data.docs.map(doc => ({ ...doc.data(), id: doc.id }));
    return orderData
  }

  postData = async () => {
    const userCollectionRef = collection(db, "getData");
    await addDoc(userCollectionRef, {name: 'Manasa 2.0', age: 34});
  }

  sendData = (data: any) => {
    const userCollectionRef = collection(db, "userData");
    return addDoc(userCollectionRef, data)
  }

  authenticate = async (name: string, pwd: string) => {
    const userCollectionRef = collection(db, "getAuthData");
    const data = await getDocs(userCollectionRef);
    const loginData =  data.docs.map(doc => ({ ...doc.data(), id: doc.id  }));
    return loginData[0];
  }

}
