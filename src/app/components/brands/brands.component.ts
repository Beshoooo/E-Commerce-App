import { Brands } from './../../core/interfaces/brands';
import { Component, OnInit } from '@angular/core';
import { BrandsService } from 'src/app/core/services/brands.service';

@Component({
  selector: 'app-brands',
  templateUrl: './brands.component.html',
  styleUrls: ['./brands.component.css']
})
export class BrandsComponent implements OnInit {

  AllBrands:Brands[] =[];

  constructor(private _brandsService:BrandsService){}

  ngOnInit(): void
  {
    this.getAllBrands();
  }

  getAllBrands()
  {
    this._brandsService.GetAllBrands().subscribe({
      next:res=>{this.AllBrands=res.data;console.log(this.AllBrands)},
      error:err=>console.log("error in brnds response")

    })
  }




}
