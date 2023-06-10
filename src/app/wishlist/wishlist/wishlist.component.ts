import { Component } from '@angular/core';
import { WishlistService } from '../services/wishlist.service';
import { Product } from 'src/app/core/interfaces/product';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent {

  products:Product[] =[]

  constructor(private _wishlistService:WishlistService)
  {
    this.getAllWishList()
  }

  getAllWishList(){
    this._wishlistService.getWishlist().subscribe({
      next:res=>{
        this.products =res.data;

        //For wishlist
        for(let i=0 ; i<this.products.length ; i++)
        {
          let flag = this._wishlistService.searchWishlist(this.products[i].id);
          if(flag)
          {
            this.products[i].wishlist="fa-solid";

          }
          else
          {this.products[i].wishlist="fa-regular";}
        }
      }
    })
  }



  HideItem(id:string)
  {
    this.removeFormWishlist(id);

  }


  removeFormWishlist(id:string){
    this._wishlistService.removeProductFromWishlist(id).subscribe({
      next:res=>
      {
        //renew the number of items
        this._wishlistService.numOfWishlistItems.next(res.data.length);

        //remove deleted item form our products list to hide in screen
        this.products =this.products.filter(item=>item.id != id);

        //remove form the list in service
        this._wishlistService.AllWishlist =this._wishlistService.AllWishlist.filter(item=>item != id);
      },
      error:err=>console.log(err)
    })
  }

}
