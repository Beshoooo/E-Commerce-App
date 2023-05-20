import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private _httpClient:HttpClient) { }

  GetAllProducts():Observable<any>
  {
    return this._httpClient.get("https://ecommerce.routemisr.com/api/v1/products")
  }

  GetProductDetails(id:string):Observable<any>
  {
    return this._httpClient.get(`https://ecommerce.routemisr.com/api/v1/products/${id}`)
  }

}
