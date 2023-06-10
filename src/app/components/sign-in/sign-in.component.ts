import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CartService } from 'src/app/cart/services/cart.service';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent {

  isLoading:boolean=false;
  errorMsg:string="";

  constructor(private _authService:AuthService,private _router:Router,private _cartService:CartService)
  {
    _authService.navigateToHome();
  }


  LoginForm:FormGroup =new FormGroup({
    email:new FormControl(null,[Validators.required,Validators.email]),
    password:new FormControl(null,[Validators.required,Validators.pattern(/^[A-Z][a-z1-9]{5,}$/)])

  })

  Login(form:FormGroup)
  {
    if(form.valid)
    {
      this.isLoading=true
      this._authService.Login(form.value).subscribe({
        next:(res)=>{
          localStorage.setItem("userToken",res.token);
          /*get token and decode it */
          this._authService.CheckLogin();
          this._router.navigate(["/Home"]);
        },
        error:(err)=>{this.errorMsg=err.error.message;this.isLoading=false},
        complete:()=>this.isLoading=false
      })
    }
  }

  InTypePass:string ='password';
  toggleShowPassword() {
    if(this.InTypePass == 'password')
    {this.InTypePass= 'text'}
    else{this.InTypePass = 'password'}
  }

}
