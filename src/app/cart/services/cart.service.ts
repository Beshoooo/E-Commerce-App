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
    {                   //headers needed
      headers:
        {token:`${this.Token}`}
    })
  }

  getCart(): Observable<any>
  {
    return this._httpClient.get(`https://ecommerce.routemisr.com/api/v1/cart`,
    {headers:
      {token:`${this.Token}`}
    })
  }

  updateItem(id:string,newCount:number):Observable<any>
  {
    return this._httpClient.put(`https://ecommerce.routemisr.com/api/v1/cart/${id}`,
    {count:`${newCount}`},
    {
      headers:{token:`${this.Token}`}
    })
  }

  removeItem(id:string):Observable<any>
  {
    return this._httpClient.delete(`https://ecommerce.routemisr.com/api/v1/cart/${id}`,
    {
      headers:{token:`${this.Token}`}
    })
  }


}
