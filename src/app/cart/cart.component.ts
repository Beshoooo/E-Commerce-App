import { CartDetails } from './interfaces/cart-details';
import { Component } from '@angular/core';
import { CartService } from './services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {

cartDetails :CartDetails ={} as CartDetails

  constructor(private _cartService:CartService) {this.getCart()}


  getCart()
  {
    this._cartService.getCart().subscribe({
      next:response=>this.cartDetails = response,
      error:err=>console.log("error")
    })
  }

  removeItemFromCart(id:string)
  {
    this._cartService.removeItem(id).subscribe({
      next:res=>this.cartDetails = res
    })
  }

  updateItems(id:string,count:number)
  {
    this._cartService.updateItem(id,count).subscribe({
      next:res=>this.cartDetails = res,
      error:res=>console.log("error in response")
    })
  }

}
