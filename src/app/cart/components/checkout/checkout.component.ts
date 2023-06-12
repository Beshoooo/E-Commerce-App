import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/cart/services/cart.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  countries:any

  cartID:any;

  shippingForm :FormGroup = new FormGroup({
    details:new FormControl("",[Validators.required]),
    phone:new FormControl("",[Validators.required]),
    city:new FormControl("Open this select menu",[Validators.required]),
  })

  constructor(private _cartService:CartService,private _activatedRoute:ActivatedRoute)
  {
        //get all countries names
        _cartService.getAllCountries().subscribe({
          next:res=>{this.countries=res.map((n: { name: any; })=>n.name);},
          error:err=>console.log(err)
        });
  }

  ngOnInit(): void
  {
    this.cartID = this._activatedRoute.snapshot.paramMap.get("cartId")
  }

  handleOnline(){
    this._cartService.generateOnlinePayment(this.cartID,this.shippingForm.value).subscribe({
      next:res=>
        {
          if(res.status == "success")
          {
            //This line only for handle git hub return page
            res.session.success_url="https://beshoooo.github.io/E-Commerce-App/#/allorders"
            // console.log(res.session)
            window.location.href = res.session.url;
          }
        },
        error:response =>console.log(response)
    })
  }
}
