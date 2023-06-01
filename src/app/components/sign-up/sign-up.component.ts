import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {

  isLoading:boolean=false;
  errorMsg:string="";



  constructor(private _authService:AuthService,private _router:Router)
  {
    _authService.navigateToHome();


  }


  registerForm: FormGroup = new FormGroup({

    name:new FormControl(null,[Validators.required,Validators.minLength(3),Validators.maxLength(10)]),
    email:new FormControl('',[Validators.required,Validators.email]),
    password:new FormControl('',[Validators.required,Validators.pattern(/^[A-Z][a-z1-9]{5,}$/)]),
    rePassword:new FormControl('',[Validators.required]),
    phone:new FormControl('',[Validators.required,Validators.minLength(11),Validators.maxLength(11)])
  },
  {validators:this.ValidateRePassword})

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


  register(form:FormGroup){
    if(form.valid)
    {
      this.isLoading=true
      let x =this._authService.Register(form.value).subscribe({
        next:(res:any)=>this._router.navigate(['/Login']),
        error:(err:any)=>{
          this.errorMsg=err.error.message;
          this.isLoading=false
        },
        complete:()=>this.isLoading=false

      })

    }
  }

}
