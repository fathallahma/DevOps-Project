import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Content/login/login.component';
import { RegisterComponent } from './Content/register/register.component';
import {ProductsComponent} from './Content/products/products.component';
import {HomeComponent} from './Content/home/home.component';
import {ContactComponent} from './Content/contact/contact.component';
import {BasketComponent} from './Content/basket/basket.component';
import {OrderComponent} from './Content/order/order.component';
import {FavoriteComponent} from './Content/favorite/favorite.component';



const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
},
{
  path: 'Register',
  component: RegisterComponent
},
{
  path: 'products',
  component: ProductsComponent
},
{
  path: 'contact',
  component: ContactComponent
},
{
  path: '',
  component: HomeComponent
},
{
  path:'basket',
  component: BasketComponent
},
{
  path:'favorite',
  component: FavoriteComponent
},
{
  path:'order',
  component: OrderComponent
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
