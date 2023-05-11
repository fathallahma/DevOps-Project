import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Structure/header/header.component';
import { FooterComponent } from './Structure/footer/footer.component';
import { HomeComponent } from './Content/home/home.component';
import { RegisterComponent } from './Content/register/register.component';
import { LoginComponent } from './Content/login/login.component';
import { ProductsComponent } from './Content/products/products.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';
import { BasketComponent } from './Content/basket/basket.component';
import { ContactComponent } from './Content/contact/contact.component';
import { OrderComponent } from './Content/order/order.component';
import { FavoriteComponent } from './Content/favorite/favorite.component'; 
import { ReactiveFormsModule } from '@angular/forms';
import { ForgetComponent } from './Content/forget/forget.component';
import { ResetComponent } from './Content/reset/reset.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    RegisterComponent,
    LoginComponent,
    ProductsComponent,
    BasketComponent,
    ContactComponent,
    OrderComponent,
    FavoriteComponent,
    ForgetComponent,
    ResetComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatIconModule,
    MatMenuModule,
    ReactiveFormsModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
