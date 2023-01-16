import { Component, Input, OnInit } from '@angular/core';
import { CategoryService } from '../../../shared/services/category.service';
import { ICategory } from '../../../../models/category-model';
import { ICart } from 'src/models/cart-model';

@Component({
  selector: 'app-catogory-biryani-sub',
  templateUrl: './catogory-biryani-sub.component.html',
  styleUrls: ['./catogory-biryani-sub.component.scss']
})
export class CatogoryBiryaniSubComponent implements OnInit {
  @Input() category: ICategory;
  activeSize = [true, false, false];
  isAdded = false;
  count = 1;
  cartValue: ICart[];
  selectedSize: string;

  constructor(private categoryService: CategoryService) { }

  ngOnInit(): void {
    this.categoryService.updateCartValue.subscribe(response => {
      this.cartValue = response;
      this.setValues();
    })
  }

  setValues() {
    const i = this.cartValue.findIndex(response => response.item === this.category.name);
    if(i > -1) {
      this.count = this.cartValue[i].quantity;
      this.isAdded = true;
    }
  }

  selectSize(index: number) {
    if(this.category.sizes?.length) {
      this.selectedSize = this.category.sizes[index];
     this.activeSize.forEach((size, i) => {
       if(i === index) {
         this.activeSize[i] = true;
       } else {
         this.activeSize[i] = false;
       }
     })
    }
  }

  setCartValue() {
    const i = this.cartValue.findIndex(response => response.item === this.category.name);
    if(i > -1) {
      this.cartValue[i].price = (+(this.category.price?.split('£')[1]) * this.count).toFixed(2);
      this.cartValue[i].quantity = this.count;
    } else {
      this.cartValue.push({
        item: this.category.name,
        price: (+(this.category.price?.split('£')[1]) * this.count).toFixed(2),
        quantity: this.count
      })
    }
    this.categoryService.updateCart(this.cartValue);
  }

  removeItem() {
    const i = this.cartValue.findIndex(response => response.item === this.category.name);
    if(i > -1) {
      this.cartValue.splice(i, 1)
    }
    this.categoryService.updateCart(this.cartValue);
  }

  onAddClick() {
    this.isAdded = true;
    this.count = 1;
    this.setCartValue();
  }

  onReduceCount() {
    if(this.count === 1) {
      this.isAdded = false;
      this.count-= 1;
      this.removeItem()
    } else {
      this.count-= 1;
      this.setCartValue();
    }
  }

  onPlusCount() {
    this.count+= 1;
    this.setCartValue();
  }

}
