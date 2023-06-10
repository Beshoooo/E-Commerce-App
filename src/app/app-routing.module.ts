import { AuthGuard } from './core/gaurds/auth.guard';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ProductsComponent } from './components/products/products.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { BrandsComponent } from './components/brands/brands.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { AllordersComponent } from './cart/components/allorders/allorders.component';
import { ForgetPasswordComponent } from './components/forget-password/forget-password.component';
import { RestPasswordComponent } from './components/rest-password/rest-password.component';
import { WishlistComponent } from './wishlist/wishlist/wishlist.component';

const routes: Routes = [
  {path:"",redirectTo:"Home",pathMatch:'full'},

  {path:"Home",canActivate:[AuthGuard],component:HomeComponent,title:"Home"},
  {path:"Products",canActivate:[AuthGuard],component:ProductsComponent,title:"Products"},
  {path:"Categories",canActivate:[AuthGuard],component:CategoriesComponent,title:"Categories"},
  {path:"Brands",canActivate:[AuthGuard],component:BrandsComponent,title:"Brands"},
  {path:"ProductDetails/:id",canActivate:[AuthGuard],component:ProductDetailsComponent,title:"Product Details"},
  {path:"allorders",component:AllordersComponent,canActivate:[AuthGuard],title:"My Orders"},
  {path:"wishlist",component:WishlistComponent,canActivate:[AuthGuard],title:"My WishList"},


  {path:"Register",component:SignUpComponent,title:"Register"},
  {path:"Login",component:SignInComponent,title:"Login"},
  {path:"ForgetPass",component:ForgetPasswordComponent,title:"Forget Password"},
  {path:"ResetPass",component:RestPasswordComponent,title:"Reset Password"},



  //For route to another sub module
  { path: 'cart', loadChildren: () => import('./cart/cart.module').then(m => m.CartModule) },

  {path:"**",component:NotFoundComponent,title:"Not Found"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes/*,{useHash:true}*/)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
