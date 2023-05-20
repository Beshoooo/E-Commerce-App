import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { Product } from 'src/app/core/interfaces/product';
import { ProductService } from 'src/app/core/services/product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent {

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      }
    },
    nav: true
  }


  productID:string="";
  productDetails:Product ={} as Product

  constructor(private _activatedRoute:ActivatedRoute,private _productService:ProductService)
  {
    _activatedRoute.paramMap.subscribe((res:any)=>{
      this.productID = res.params.id
    })
    _productService.GetProductDetails(this.productID).subscribe({
      next:(details)=>this.productDetails = details.data,
      error:(err)=>console.log('error')

    })
  }




}
