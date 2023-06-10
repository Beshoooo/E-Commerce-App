import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { AuthGuard } from '../core/gaurds/auth.guard';

const routes: Routes = [
  { path: '', canActivate:[AuthGuard],component: CartComponent ,title:"My Cart"},
  {path:"Checkout/:cartId",component:CheckoutComponent,title:"Checkout"},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CartRoutingModule { }
