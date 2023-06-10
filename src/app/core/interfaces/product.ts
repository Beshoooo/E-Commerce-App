export interface Product {
  imageCover:string,
  price:number,
  title:string,
  ratingsAverage:number,
  category:Cat,
  brand:Brands,
  id:string,
  description?:string,
  images?:[],
  wishlist:string,
  quantity:number,
  sold:number

}

interface Cat{
  name:string
}
interface Brands{
  name:string
}
