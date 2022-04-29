import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsingleComponent } from '../component/productsingle/productsingle.component';
import { HomeComponent } from '../component/home/home.component';
import { CartComponent } from '../component/cart/cart.component';
import { CheckoutComponent } from '../component/checkout/checkout.component';
import { ShopComponent } from '../component/shop/shop.component';
import { DashboardComponent } from '../component/dashboard/dashboard.component';
import { MenComponent } from '../component/men/men.component';
import { WomenComponent } from '../component/women/women.component';
import { JeweleryComponent } from '../component/jewelery/jewelery.component';
import { LoginComponent } from '../component/login/login.component';
import { LogoutComponent } from '../component/logout/logout.component';
import { AuthGuard } from '../services/auth.guard';


const routes: Routes = [
  { path:"", canActivate:[AuthGuard], component: HomeComponent },
  { path:"product-single", component:ProductsingleComponent, canActivate:[AuthGuard] },
  { path:"cart", component:CartComponent, canActivate:[AuthGuard] },
  { path:"checkout", component:CheckoutComponent, canActivate:[AuthGuard] },
  { path:"shop", component:ShopComponent, canActivate:[AuthGuard] },
  { path:"dashboard", component:DashboardComponent, canActivate:[AuthGuard] },
  {path:"men/:cname", component:MenComponent, canActivate:[AuthGuard]},
  {path:"women", component:WomenComponent, canActivate:[AuthGuard]},
  {path:"jewelery", component:JeweleryComponent, canActivate:[AuthGuard]},
  { path:"login", component:LoginComponent },
  { path:"logout", component:LogoutComponent, canActivate:[AuthGuard]},
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
