export interface CartDetails {
  numOfCartItems:number,
  data:Data
}

interface Data
{
  _id:number,
  totalCartPrice:number,
  products:productsDetails[]

}

interface productsDetails
{
  count:number,
  price:number,
  product:productDetails
}

interface productDetails
{
  id:string,
  imageCover:string,
  title:string,
}
