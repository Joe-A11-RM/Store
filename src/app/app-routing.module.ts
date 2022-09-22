import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './product/product.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { CartComponent } from './cart/cart.component';
import { OrderconfirmationComponent } from './orderconfirmation/orderconfirmation.component';

const routes: Routes = [
  {path:'',component:ProductComponent},
  {path:'cart',component:CartComponent},
  {path:'details/:id',component:ProductDetailsComponent},
  {path:'order',component:OrderconfirmationComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
