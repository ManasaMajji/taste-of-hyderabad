import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavigationComponent } from './shared/components/navigation/navigation.component';
import { MenuItemsComponent } from './components/menu-items/menu-items.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from  '@angular/common/http';
import { HomeComponent } from './components/home/home.component';
import { CategoryComponent } from './components/category/category.component';
import { SideNavComponent } from './components/side-nav/side-nav.component';
import { CategoryBiryaniComponent } from './components/category-biryani/category-biryani.component';
import { CatogoryBiryaniSubComponent } from './components/category-biryani/catogory-biryani-sub/catogory-biryani-sub.component';
import { CategoryService } from './shared/services/category.service';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { UserFormComponent } from './components/user-form/user-form.component';
import { SharedModalComponent } from './shared/components/shared-modal/shared-modal.component';
import { AdminLoginComponent } from './components/admin-login/admin-login.component';
import { OrdersComponent } from './components/orders/orders.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    MenuItemsComponent,
    CarouselComponent,
    HomeComponent,
    CategoryComponent,
    SideNavComponent,
    CategoryBiryaniComponent,
    CatogoryBiryaniSubComponent,
    CheckoutComponent,
    ContactUsComponent,
    UserFormComponent,
    SharedModalComponent,
    AdminLoginComponent,
    OrdersComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [CategoryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
