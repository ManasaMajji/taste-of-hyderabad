import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryBiryaniComponent } from './components/category-biryani/category-biryani.component';
import { CategoryComponent } from './components/category/category.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { HomeComponent } from './components/home/home.component';
import { OrdersComponent } from './components/orders/orders.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'categories', component: CategoryComponent, children: [
    {path: '', component: CategoryBiryaniComponent},
    {path: ':type', component: CategoryBiryaniComponent}
  ]},
  {path: 'checkout', component: CheckoutComponent},
  {path: 'contact-us', component: ContactUsComponent},
  {path: 'orders', component: OrdersComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
