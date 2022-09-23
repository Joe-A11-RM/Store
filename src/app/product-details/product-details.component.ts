import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ProductServiceService } from '../product-service.service';
import { ActivatedRoute } from '@angular/router';
import { CartservicesService } from '../cartservices.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  Details :Array<any>=[]
  amount :number =0
  singleProduct :any
  constructor(private DetailService : ProductServiceService, private activatedRoute :ActivatedRoute , private Cart: CartservicesService) {
   }

  ngOnInit(): void {
    let id = 0
    this.activatedRoute.paramMap.subscribe((data : any)=>{
    id=data.params.id
    this.DetailService.getinf().subscribe((res : any)=>{
    this.Details=res
    this.Details = this.Details.filter((data:any)=> data.id==id)
    this.singleProduct = this.Details[0]


    })
  })
  }
  addtoCart(item:any){
    this.Cart.addtoCart(item)
    alert("Product Added to cart")
  }
}
