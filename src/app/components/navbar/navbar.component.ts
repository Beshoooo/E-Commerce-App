import { Component } from '@angular/core';
import { CartService } from 'src/app/cart/services/cart.service';
import { AuthService } from 'src/app/core/services/auth.service';
import { WishlistService } from 'src/app/wishlist/services/wishlist.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  numOfCartItems:number=0
  numOfWishlistItems:number=0

  IsLoggedIn:boolean=false;

  constructor(private _authService:AuthService,
    private _cartService:CartService,
    private _wishlistService:WishlistService
    )
  {
    _authService.userData.subscribe((res)=>{
      if(_authService.userData.getValue())
        {this.IsLoggedIn=true;}
      else
        {this.IsLoggedIn=false}

        _cartService.numOfCartItems.subscribe({next:res=>this.numOfCartItems=res})
        _wishlistService.numOfWishlistItems.subscribe({next:res=>this.numOfWishlistItems=res})

    })


  }


  Logout()
  {
    this._authService.Logout();

    //to update cart items
    this._cartService.numOfCartItems.subscribe({next:res=>this.numOfCartItems=0})
    this._wishlistService.numOfWishlistItems.subscribe({next:res=>this.numOfWishlistItems=0})

  }



}
