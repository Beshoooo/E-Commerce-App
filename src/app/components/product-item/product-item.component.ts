import { Component, Input } from '@angular/core';
import { CartService } from 'src/app/cart/services/cart.service';
import { Product } from 'src/app/core/interfaces/product';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent {

  constructor( private _cartService:CartService) {}

  @Input() product:Product = {} as Product;

  addToCart(id:string)
  {
    this._cartService.addProduct(id).subscribe({
      next:response=>this._cartService.numOfCartItems.next(response.numOfCartItems),
      error:err=>console.log("error in response")
    })
  }
}
