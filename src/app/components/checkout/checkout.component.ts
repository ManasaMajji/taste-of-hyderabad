import { Component, Input, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { SharedModalComponent } from 'src/app/shared/components/shared-modal/shared-modal.component';
import { CategoryService } from 'src/app/shared/services/category.service';
import { ICart } from 'src/models/cart-model';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {

   cartItems: ICart[];
  cartValue: number;
  constructor(private categoryService: CategoryService, private modalService: NgbModal) { }

  ngOnInit(): void {
    this.categoryService.updateCartValue.subscribe(res => {
      this.cartItems = res;
      if(this.cartItems?.length) {
        this.calculatePrice();
      }
    })
  }

  calculatePrice() {
    this.cartValue = this.cartItems.reduce((acc,curVal) => acc + +curVal.price, 0)
  }

  onPlaceOrder() {
    this.modalService.open(SharedModalComponent);
    this.categoryService.placeOrder(this.cartItems).subscribe((res)=>{
    })
  }

}
