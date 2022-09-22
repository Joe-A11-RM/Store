import { Component, OnInit } from '@angular/core';
import { Products } from '../Products';
import { ProductServiceService } from '../product-service.service';
import { CategoryTable } from '../CategoryTable';
import { Router } from '@angular/router';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  product : Products[] = []
  columndata : CategoryTable[] =[]
  constructor(private inf : ProductServiceService,private router:Router) {

  }

  ngOnInit(): void {
    //this.product = this.inf.getinf()
    this.inf.getinf().subscribe(res=>{
      this.product = res
    })
    this.columndata=[{
      title:"Categories",
      categories_1:"SuperMarket",
      categories_2:"Fashion",
      categories_3:"Phones&Tablets",
      categories_4:"Home",
      categories_5:"Electronics",
      categories_6:"Computing"
   }]
  }

}
