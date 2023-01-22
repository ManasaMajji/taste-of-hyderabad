import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/shared/services/category.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {
  data: any;
  isLogin: boolean;

  constructor(private orderService: CategoryService) { }

  ngOnInit(): void {
    this.orderService.login.subscribe(
      res => {
        this.isLogin = res;
        console.log('auth')
        if(res) {
          this.getOrders();
        }
      }
    );
  }

  getOrders() {
    this.orderService.getData().then(data => {
      this.data = data;
    })
  }

}
