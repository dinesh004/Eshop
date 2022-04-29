import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './routing/app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './component/header/header.component';
import { FooterComponent } from './component/footer/footer.component';
import { HomeComponent } from './component/home/home.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { ProductsingleComponent } from './component/productsingle/productsingle.component';
import { CartComponent } from './component/cart/cart.component';
import { CheckoutComponent } from './component/checkout/checkout.component';
import { ShopComponent } from './component/shop/shop.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { MenComponent } from './component/men/men.component';
import { HttpClientModule } from '@angular/common/http';
import {MatCardModule} from '@angular/material/card';
import { WomenComponent } from './component/women/women.component';
import { ApiService } from './services/api.service';
import { JeweleryComponent } from './component/jewelery/jewelery.component';
import { CartService } from './services/cart.service';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { LoginComponent } from './component/login/login.component';
import { LogoutComponent } from './component/logout/logout.component';
import { FormsModule } from '@angular/forms';
import { LoadingBarRouterModule } from '@ngx-loading-bar/router';
import { LoadingBarHttpClientModule } from '@ngx-loading-bar/http-client';
import {MatSelectModule} from '@angular/material/select';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ProductsingleComponent,
    CartComponent,
    CheckoutComponent,
    ShopComponent,
    DashboardComponent,
    MenComponent,
    WomenComponent,
    JeweleryComponent,
    LoginComponent,
    LogoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SlickCarouselModule,
    HttpClientModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    FormsModule,
    LoadingBarRouterModule,
    LoadingBarHttpClientModule,
    MatSelectModule
  ],
  providers: [ApiService, CartService],
  bootstrap: [AppComponent]
})
export class AppModule {}
