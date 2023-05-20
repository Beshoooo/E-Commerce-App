import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { Categories } from 'src/app/core/interfaces/categories';
import { CategoriesService } from 'src/app/core/services/categories.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit{

  categories:Categories[]=[];

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 8
      }
    },
    nav: true
  }
  constructor(private _categoriesService:CategoriesService) {}

  ngOnInit(): void {
    this.getAllCategories();
  }

  getAllCategories()
  {
    this._categoriesService.GetAllCategories().subscribe({
      next:(cats)=>this.categories = cats.data
    })
  }

}
