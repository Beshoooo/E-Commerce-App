import { MatButtonModule } from '@angular/material/button';
import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/core/interfaces/product';
import { ProductService } from 'src/app/core/services/product.service';
import { WishlistService } from 'src/app/wishlist/services/wishlist.service';

@Component({
  selector: 'app-featured-products',
  templateUrl: './featured-products.component.html',
  styleUrls: ['./featured-products.component.css'],
})
export class FeaturedProductsComponent implements OnInit {

  products:Product[]=[];
  searchByName:string= '';

  constructor(private _productService:ProductService,
    private _wishlistService:WishlistService) {}

  ngOnInit(): void {
    this.getAllProducts()
  }

  getAllProducts()
  {
    this._productService.GetAllProducts().subscribe({
      next:(res)=>{
        this.products = res.data;

        //For wishlist
        for(let i=0 ; i<this.products.length ; i++)
        {
          let flag = this._wishlistService.searchWishlist(this.products[i].id);
          if(flag)
          {this.products[i].wishlist="fa-solid";}
          else
          {this.products[i].wishlist="fa-regular";}
        }

      },
      error:(err)=>console.log('error'),
      // complete:()=>console.log('Completed')
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
        let index = this.products.findIndex(item=>item.id == id);
        this.products[index].wishlist='fa-regular';

      },
      error:err=>console.log(err)
    })
  }

}
