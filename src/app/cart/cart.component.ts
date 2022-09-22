import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CartservicesService } from '../cartservices.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  product : any =[]
  AllProductsTotal:number=0
  FullName:String = ""
  Address:String =""
  Credit:any
  @Output() addPost: EventEmitter<any> = new EventEmitter()
  constructor(private cart:CartservicesService) { }

  ngOnInit(): void {
    this.cart.getProductData().subscribe(res=>{
      this.product=res
      this.AllProductsTotal = this.getTotal()
    })
  }

  getTotal():number{
   return this.cart.getTotalamount()
  }

  removeProduct(item:any){
    this.cart.removeCartData(item)
  }
  submitForm():void{
    const post = {
      FullName:this.FullName,
      Address:this.Address,
    }
    this.addPost.emit(post)
    this.FullName=''
    this.Address=''
  }
}