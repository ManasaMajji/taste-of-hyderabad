import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ICart } from 'src/models/cart-model';
import { CategoryService } from '../../services/category.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
  cartItems: ICart[] = [];
  cartValue: number;

  constructor(private router: Router, private categoryService: CategoryService) { }

  ngOnInit(): void {
    this.categoryService.updateCartValue.subscribe(res => {
      this.cartItems = res;
      if(this.cartItems?.length) {
        this.calculatePrice();
      }
    })
  }

  proceedToCheckout() {
    this.router.navigate(['checkout'])
  }

  calculatePrice() {
    this.cartValue = this.cartItems.reduce((acc,curVal) => acc + +curVal.price, 0)
  }

  navigateToHome() {
    this.router.navigate([""]);
  }

}
