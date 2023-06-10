import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.css']
})
export class ForgetPasswordComponent {

  isLoading:boolean=false;
  errorMsg:string="";
  SentCode:boolean=false;
  constructor(private _authService:AuthService,private _router:Router)
  {

  }
  EmailForm:FormGroup =new FormGroup({
    email:new FormControl(null,[Validators.required,Validators.email]),
  })


  SendMail()
  {
    if(this.EmailForm.valid)
    {
      this.isLoading=true
      this._authService.ForgetPassword(this.EmailForm.value).subscribe({
        next:res=>{
          if(res.statusMsg == "success")
          {
            this.isLoading=false
            this.SentCode=true;
            this.errorMsg='';
            //for get email in next page and send it to server with new pass
            localStorage.setItem("Email",this.EmailForm.value.email);
          }
        },
        error:err=>{
          this.isLoading=false;
          this.SentCode=false;
          this.errorMsg='This email has no account'
        }
      })
    }
  }

  CodeForm:FormGroup =new FormGroup({
    resetCode:new FormControl(null,[Validators.required]),
  })

  VerifyCode(){
    if(this.CodeForm.valid)
    {
      this.isLoading=true
      this._authService.CheckCode(this.CodeForm.value).subscribe({
        next:res=>{
          if(res.status == "Success")
          {
            this.isLoading=false;
            this.errorMsg='';
            //for check that user has been comming form this page in the comming page and skip all thing right
            localStorage.setItem("Code",this.CodeForm.value.resetCode);
            this._router.navigate(['/ResetPass']);
          }
      },
      error:err=>{
        this.isLoading=false;
        this.errorMsg='Invalid Code';
        this.isLoading=false;
      }

    })

    }
  }

}
