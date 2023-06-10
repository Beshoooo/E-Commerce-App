export interface Orders {

  createdAt:string,//2
  isDelivered:boolean,//8
  isPaid:boolean,//7
  paymentMethodType:string,//4
  shippingAddress:address,//3
  totalOrderPrice:number,//5
  taxPrice:number,//6

}

interface address
{
  details:string,
  phone:string,
  city:string
}
