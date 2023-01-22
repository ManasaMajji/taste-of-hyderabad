import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CategoryService } from '../../shared/services/category.service';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent implements OnInit {

  constructor(private categoryService: CategoryService, private router: Router) { }
  userForm: FormGroup;
  orderPlaced: boolean;
  orderId: string;

  ngOnInit() {
    this.orderPlaced = false;
  this.userForm = new FormGroup({
    "userName": new FormControl("", Validators.required),
    "email": new FormControl(null, [Validators.required, Validators.email]),
    "addressOne": new FormControl("",Validators.required),
    "zipCode": new FormControl("", Validators.required),
    "phone": new FormControl("", Validators.required)
  });
  }

  onSubmit() {
    const userData = this.userForm?.value;
    this.categoryService.updateCartValue.subscribe(res => {
      userData.order = res;
      if(userData.order) {
      this.categoryService.sendData(userData).then(docRef => {
        this.orderId = docRef.id;
        this.orderPlaced = true;
        this.router.navigate([""]);
      });
    }
    });
  }


}
