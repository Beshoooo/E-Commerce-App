import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/core/interfaces/product';
import { ProductService } from 'src/app/core/services/product.service';

@Component({
  selector: 'app-featured-products',
  templateUrl: './featured-products.component.html',
  styleUrls: ['./featured-products.component.css']
})
export class FeaturedProductsComponent implements OnInit {

  products:Product[]=[];

  constructor(private _productService:ProductService) {}

  ngOnInit(): void {
    this.getAllProducts()
  }

  getAllProducts()
  {
    this._productService.GetAllProducts().subscribe({
      next:(res)=>{this.products = res.data;},
      error:(err)=>console.log('error'),
      // complete:()=>console.log('Completed')
    })
  }

}
