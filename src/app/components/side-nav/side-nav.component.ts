import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { IMenu } from 'src/models/menu-model';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent implements OnInit {

  menu: IMenu[];
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get("../../assets/data/menu.json").subscribe((menu) => {
      this.menu = menu as IMenu[];
    })
  }

}
