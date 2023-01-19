import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { CategoryService } from '../../shared/services/category.service';
import { ICart } from '../../../models/cart-model';

@Component({
  selector: 'app-category-biryani',
  templateUrl: './category-biryani.component.html',
  styleUrls: ['./category-biryani.component.scss']
})
export class CategoryBiryaniComponent implements OnInit {

  biryaniTypes: any;
  params: string;
  cartItems: ICart[];
  cartValue: number;

  constructor(private http: HttpClient,
    private route: ActivatedRoute,
    private categoryService: CategoryService) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.params = params["type"] || 'biryani';
      this.getMenuItems();
    });
  }

  getMenuItems() {
    this.http.get(`../../assets/data/${this.params}Category.json`).subscribe(data => {
      if(data) {
      this.biryaniTypes = data;
      } else {
        this.biryaniTypes = [];
      }
    }, (err) => {
      this.biryaniTypes = [];
    });
  }

}
