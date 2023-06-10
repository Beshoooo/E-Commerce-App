import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatIconModule} from '@angular/material/icon';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { BrandsComponent } from './components/brands/brands.component';
import { ProductsComponent } from './components/products/products.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { FeaturedProductsComponent } from './components/featured-products/featured-products.component';
import { ProductItemComponent } from './components/product-item/product-item.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { MainSliderComponent } from './components/main-slider/main-slider.component';
import { SearchByNamePipe } from './core/pipes/search-by-name.pipe';
import { CheckoutComponent } from './cart/components/checkout/checkout.component';
import { AllordersComponent } from './cart/components/allorders/allorders.component';
import { HttpInterceptorInterceptor } from './Interceptors/http-interceptor.interceptor';
import { LoaderComponent } from './components/loader/loader.component';
import { ForgetPasswordComponent } from './components/forget-password/forget-password.component';
import { RestPasswordComponent } from './components/rest-password/rest-password.component';
import { WishlistComponent } from './wishlist/wishlist/wishlist.component';




@NgModule({
    declarations: [
        AppComponent,
        NavbarComponent,
        BrandsComponent,
        ProductsComponent,
        SignInComponent,
        SignUpComponent,
        CategoriesComponent,
        FooterComponent,
        HomeComponent,
        NotFoundComponent,
        FeaturedProductsComponent,
        ProductItemComponent,
        ProductDetailsComponent,
        MainSliderComponent,
        SearchByNamePipe,
        CheckoutComponent,
        AllordersComponent,
        LoaderComponent,
        ForgetPasswordComponent,
        RestPasswordComponent,
        WishlistComponent,
    ],
    providers: [
        {
            provide: HTTP_INTERCEPTORS,
            useClass: HttpInterceptorInterceptor,
            multi: true
        }
    ],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        ReactiveFormsModule,
        BrowserAnimationsModule,
        CarouselModule,
        FormsModule,
        MatSnackBarModule,
        MatButtonModule,
        MatInputModule,
        MatFormFieldModule,
        MatTooltipModule,
        MatIconModule
    ]
})
export class AppModule { }
