import { Pipe, PipeTransform } from '@angular/core';
import { Product } from 'src/app/core/interfaces/product';
import { CartDetails } from '../interfaces/cart-details';

@Pipe({
  name: 'filterCart'
})
export class FilterCartPipe implements PipeTransform {

  transform(products: any[]): any[] {
    return products.filter(pro=>pro.count != 0);
  }

}
