import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../interfaces/product';

@Pipe({
  name: 'searchByName'
})
export class SearchByNamePipe implements PipeTransform {

  transform(products: Product[],term:string): Product[] {
    let retProducts:Product[] = products.filter((Product)=>Product.title.toLowerCase().includes(term.toLowerCase()))
    return retProducts;
  }

}
