import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { CategoryService } from 'src/app/shared/services/category.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.scss']
})
export class AdminLoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(private categoryService: CategoryService,
    public activeModal: NgbActiveModal,
    private router: Router) { }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      "userName": new FormControl("", Validators.required),
      "password": new FormControl("", Validators.required)
    })
  }

  authenticate() {
    this.categoryService.login.next(false);
    const uName = this.loginForm.get('userName')?.value;
    const pwd = this.loginForm.get('password')?.value;
    this.categoryService.authenticate(uName, pwd).then((data: any) => {
      if(data?.userName === uName && data?.password === pwd) {
        this.activeModal.close();
        this.categoryService.login.next(true);
        this.router.navigate(['/orders']);
      }
    });
  }

}
