import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BrandsService {

  constructor(private _httpClient:HttpClient) { }

  GetAllBrands():Observable<any>
  {
    return this._httpClient.get("https://ecommerce.routemisr.com/api/v1/brands")
  }

  GetBrandDetails(id:string):Observable<any>
  {
    return this._httpClient.get(`https://ecommerce.routemisr.com/api/v1/brands/${id}`)
  }

}
