import { ANIMATION_MODULE_TYPE, Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartservicesService {
  cartlist : any=[]
  productList = new BehaviorSubject<any>([])
  constructor() { }
  getProductData(){
    return this.productList.asObservable();
  }

  addtoCart(product:any){
    this.cartlist.push(product)
    this.productList.next(this.cartlist)
    this.getTotalamount()
  }

  getTotalamount():number{
    let total = 0
    this.cartlist.map((res:any)=>{
      total = res.price +total
    })
    return total
  }

  removeCartData(product:any){
    this.cartlist.map((res:any,index:any)=>{
      if(product.id === res.id){
        this.cartlist.splice(index,1)
      }
    })
  }


}
