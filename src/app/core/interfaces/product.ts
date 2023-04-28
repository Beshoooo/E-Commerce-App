export interface Product {
  imageCover:string,
  price:number,
  title:string,
  ratingsAverage:number,
  category:Cat,
  id:string,
  description?:string,
  images?:[]

}

interface Cat{
  name:string
}
