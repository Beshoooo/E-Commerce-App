import { Component } from '@angular/core';
import { CartService } from 'src/app/cart/services/cart.service';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  numOfCartItems:number=0

  IsLoggedIn:boolean=false;

  constructor(private _authService:AuthService,private _cartService:CartService)
  {
    _authService.userData.subscribe((res)=>{
      if(_authService.userData.getValue())
        {this.IsLoggedIn=true;}
      else
        {this.IsLoggedIn=false}

        this._cartService.numOfCartItems.subscribe({next:res=>this.numOfCartItems=res})
    })


  }


  Logout()
  {
    this._authService.Logout();

    //to update cart items
    this._cartService.numOfCartItems.subscribe({next:res=>this.numOfCartItems=0})

  }



}
