import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CartService } from 'src/app/cart/services/cart.service';
import { Product } from 'src/app/core/interfaces/product';

import { MatSnackBar } from '@angular/material/snack-bar';
import {MatTooltipModule} from '@angular/material/tooltip';
import { WishlistService } from 'src/app/wishlist/services/wishlist.service';


@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css'],

})
export class ProductItemComponent{
  AllWishlist:string[]=[];

  @Input() product:Product = {} as Product;
  @Output() delId:EventEmitter<string> = new EventEmitter();

  constructor( private _cartService:CartService,
    private _matSnackBar:MatSnackBar,
    private _wishlistService:WishlistService)
    {}


  addToCart(id:string)
  {

    this._cartService.addProduct(id).subscribe({
      next:response=>
      {
        this._cartService.numOfCartItems.next(response.numOfCartItems);

        //Mat Snackbar
        this._matSnackBar.open('Item added succsussfuly', '', {
          duration: 2000,
          verticalPosition:'bottom',
          horizontalPosition:'right',
          panelClass:['blue-snackbar']
          });

      },
      error:err=>console.log("error in response")
    })
  }



  clickToWishlist(id:string)
  {
    //For wishlist Heart
    if(this.product.wishlist == "fa-solid")
    {
      this.product.wishlist = "fa-regular";
      //this.removeFormWishlist(id);
      this.delId.emit(id)

    }
    else
    {
      this.product.wishlist = "fa-solid";
      this.addToWishlist(id);
    }

  }

  removeFormWishlist(id:string){
    this._wishlistService.removeProductFromWishlist(id).subscribe({
      next:res=>
      {
        this._wishlistService.numOfWishlistItems.next(res.data.length);
        // console.log(res);
      },
      error:err=>console.log(err)
    })
  }

  addToWishlist(id:string){
    let productID:{}={"productId": id}
    this._wishlistService.addProductToWishlist(productID).subscribe({
      next:res=>
      {
        this._wishlistService.AllWishlist=res.data;
        this._wishlistService.numOfWishlistItems.next(res.data.length);
      }
    })
  }
}
