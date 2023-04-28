import { Component } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  IsLoggedIn:boolean=false;

  constructor(private _authService:AuthService)
  {
    _authService.userData.subscribe((res)=>{
      if(_authService.userData.getValue())
        {this.IsLoggedIn=true}
      else
        {this.IsLoggedIn=false}
    })
  }


  Logout()
  {
    this._authService.Logout();
  }



}
