import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import jwtDecode from 'jwt-decode';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  // make var as BehaviorSubject to allow subscribe it as blew functions
  userData:BehaviorSubject<any> = new BehaviorSubject(null);

  constructor(private _httpClient:HttpClient ,private _router:Router)
  {
    // check if there is login in storage then put it in userdata
    // because if we refresh userData will be null as default
    if(localStorage.getItem('userToken'))
    {this.CheckLogin()}
  }


  Register(data:any):Observable<any>
  {
    return this._httpClient.post("https://ecommerce.routemisr.com/api/v1/auth/signup",data)
  }

  Login(data:any):Observable<any>
  {
    return this._httpClient.post("https://ecommerce.routemisr.com/api/v1/auth/signin",data)
  }

  CheckLogin()
  {
    let token:(string|null) = localStorage.getItem("userToken");
    token = JSON.stringify(token);  //to convert null to string to avoid errors
    let encoded = jwtDecode(token);
    this.userData.next(encoded);
  }

  Logout()
  {
    localStorage.removeItem('userToken');
    this.userData.next(null);
    this._router.navigate(["/Login"])
  }

  //if user login and try to navigate to login page again
  navigateToHome()
  {
    if(localStorage.getItem("userToken") != null)
    {this._router.navigate(["/Home"]);}
  }

}
