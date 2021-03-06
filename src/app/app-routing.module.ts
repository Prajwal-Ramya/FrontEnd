import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';

const routes: Routes = [


{path:"homepage",component:HomepageComponent},
{path:"", redirectTo:"/app-login-page", pathMatch:"full"},
{path:"app-login-page",component:LoginPageComponent},
{path:"app-cart" ,component:CartComponent},
{path:"checkout",component:CheckoutComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
