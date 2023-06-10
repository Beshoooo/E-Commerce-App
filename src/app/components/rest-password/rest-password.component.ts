import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-rest-password',
  templateUrl: './rest-password.component.html',
  styleUrls: ['./rest-password.component.css']
})
export class RestPasswordComponent {

  isLoading:boolean=false;
  errorMsg:string="";

  email:string =`${localStorage.getItem("Email")}`;

  constructor(private _authService:AuthService,private _router:Router)
  {
    if(!localStorage.getItem("Code"))
    {_router.navigate(['/notfound'])}
  }

  ResetForm: FormGroup = new FormGroup({

    email:new FormControl(this.email),
    password:new FormControl('',[Validators.required,Validators.pattern(/^[A-Z][a-z1-9]{5,}$/)]),
    rePassword:new FormControl('',[Validators.required]),
  },{validators:this.ValidateRePassword})

  //validate repassword
  ValidateRePassword(registerForm:any)
  {
    let ControlPassword = registerForm.get("password");
    let ControlRePassword = registerForm.get("rePassword");

    if(ControlPassword?.value == ControlRePassword?.value)
    {return null;}
    else
    {
      ControlRePassword?.setErrors({RepasswordNotMathced :"Password and Repassword should be matched"})
      return {RepasswordNotMathced :"Password and Repassword should be matched"}
    }

  }



  Reset(){
    if(this.ResetForm.valid)
    {
      this.isLoading=true;

      let obj:{}=
      {
        "email":this.ResetForm.value.email,
        "newPassword":this.ResetForm.value.password
      }
      this._authService.ResetPassword(obj).subscribe({
        next:res=>{
          localStorage.removeItem("Email");
          localStorage.removeItem("Code");
          this._router.navigate(['/Login']);
        },
        error:err=>{
          this.isLoading=false;
          this.errorMsg='There is an error.'
        }

      })
    }
  }



  InTypePass:string ='password';
  InTypeRePass:string ='password';
  toggleShowPassword() {
    if(this.InTypePass == 'password')
    {this.InTypePass= 'text'}
    else{this.InTypePass = 'password'}
  }
  toggleShowRePassword() {
    if(this.InTypeRePass == 'password')
    {this.InTypeRePass= 'text'}
    else{this.InTypeRePass = 'password'}
  }


}
