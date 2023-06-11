import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { AuthService } from 'src/app/core/services/auth.service';
import { Orders } from '../../interfaces/orders';

@Component({
  selector: 'app-allorders',
  templateUrl: './allorders.component.html',
  styleUrls: ['./allorders.component.css']
})
export class AllordersComponent implements OnInit {

  MyId:string='';
  MyName:string='';

  orders:Orders[]=[];

  constructor(private _cartService:CartService,
    private _AuthService:AuthService)
  {
    _AuthService.userData.subscribe({
      next:res=>
      {
        this.MyId=res.id;
        this.MyName=res.name;
      },
      error:err=>console.log(err)
    })
  }

  ngOnInit(): void
  {
    this.GetAllOrders()

  }


  GetAllOrders()
  {
    this._cartService.getAllOrders(this.MyId).subscribe({
      next:res=>
      {
        this.orders=res;
        // console.log(this.orders)
      },
      error:err=>console.log(err)
    })
  }

}
