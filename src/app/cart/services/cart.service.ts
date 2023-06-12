import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  numOfCartItems:BehaviorSubject<number> =new BehaviorSubject(0);
  Token:string|null;

  constructor(private _httpClient:HttpClient)
  {
    this.Token = localStorage.getItem("userToken");
    if(this.Token !=null)
    {
      this.getCart().subscribe({
      next:res=>this.numOfCartItems.next(res.numOfCartItems)})
    }
  }

  /* relaced all header with [interceptor]*/
  addProduct(id:string):Observable<any>
  {
    return this._httpClient.post(`https://ecommerce.routemisr.com/api/v1/cart`,
    {productId:id})
  }

  getCart(): Observable<any>
  {
    return this._httpClient.get(`https://ecommerce.routemisr.com/api/v1/cart`,)
  }

  updateItem(id:string,newCount:number):Observable<any>
  {
    return this._httpClient.put(`https://ecommerce.routemisr.com/api/v1/cart/${id}`,
    {count:`${newCount}`})
  }

  removeItem(id:string):Observable<any>
  {
    return this._httpClient.delete(`https://ecommerce.routemisr.com/api/v1/cart/${id}`)
  }

  generateOnlinePayment(cartId:string ,shippingAddress:any):Observable<any>
  {
    return this._httpClient.post(`https://ecommerce.routemisr.com/api/v1/orders/checkout-session/${cartId}?url=https://beshoooo.github.io/E-Commerce-App/#/allorders`,
    {
      "shippingAddress":shippingAddress
    })
  }

  getAllOrders(id:string): Observable<any>
  {
    return this._httpClient.get(`https://ecommerce.routemisr.com/api/v1/orders/user/${id}`)
  }


  getAllCountries():Observable<any>
  {
    return this._httpClient.get("https://api.countrystatecity.in/v1/countries",
    {
      headers:{"X-CSCAPI-KEY":"ZngxRXJXeWdxaHZHWXoxZ2VIeXFSaElleml0T2FzVjdVd0FteHg5MQ=="}
    })
  }


}
