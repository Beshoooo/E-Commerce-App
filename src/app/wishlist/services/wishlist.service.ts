import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WishlistService {

  numOfWishlistItems:BehaviorSubject<number> =new BehaviorSubject(0);
  Token:string|null;

  AllWishlist:string[] =[];


  constructor(private _httpClient:HttpClient)
  {
    this.Token = localStorage.getItem("userToken");
    if(this.Token !=null)
    {
      this.getWishlist().subscribe({
        next:res=>{
          this.numOfWishlistItems.next(res.count);
          for(let i=0 ;i<res.data.length;i++){
            this.AllWishlist.push(res.data[i].id)
          }
        },
        error:err=>console.log("Error in ser.")
      })
    }



  }


  getWishlist(): Observable<any>
  {
    return this._httpClient.get(`https://ecommerce.routemisr.com/api/v1/wishlist`)
  }


  addProductToWishlist(product:any):Observable<any>
  {
    return this._httpClient.post(`https://ecommerce.routemisr.com/api/v1/wishlist`,product)
  }


  removeProductFromWishlist(id:string):Observable<any>
  {
    return this._httpClient.delete(`https://ecommerce.routemisr.com/api/v1/wishlist/${id}`)
  }

  searchWishlist(id:string)
  {
    let result= this.AllWishlist.find((ele)=>ele === id)
    if(result)
    {return true;}
    else
    {return false;}
  }

}
