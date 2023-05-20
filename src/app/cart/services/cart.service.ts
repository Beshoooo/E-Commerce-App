import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  Token:string|null;

  constructor(private _httpClient:HttpClient)
  {
    this.Token = localStorage.getItem("userToken");
  }

  addProduct(id:string):Observable<any>
  {
    return this._httpClient.post(`https://ecommerce.routemisr.com/api/v1/cart`,
    {productId:id},     //body
    {headers:           //headers needed
      {
        token:`${this.Token}`
      }
    }
    )
  }

}
