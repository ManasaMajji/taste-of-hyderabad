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

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  proceedToCheckout() {
    this.router.navigate(['checkout'])
  }

  navigateToHome() {
    this.router.navigate([""]);
  }

}
