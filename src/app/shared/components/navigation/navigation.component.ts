import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AdminLoginComponent } from 'src/app/components/admin-login/admin-login.component';
import { ICart } from 'src/models/cart-model';
import { CategoryService } from '../../services/category.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  constructor(private router: Router, private modalService: NgbModal) { }

  ngOnInit(): void {
  }

  proceedToCheckout() {
    this.router.navigate(['checkout'])
  }

  navigateToHome() {
    this.router.navigate([""]);
  }

  adminLogin() {
    this.modalService.open(AdminLoginComponent)
  }

}
