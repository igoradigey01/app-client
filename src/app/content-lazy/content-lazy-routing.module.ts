import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { from } from 'rxjs';
import { ProductComponent} from "./product/product.component";
import{ProductDetailsComponent} from "./product-details/product-details.component";
import {PrivacyComponent} from './privacy/privacy.component';

const routes: Routes = [
  {path:'',component:ProductComponent},
  {path:'products/:productId',component:ProductDetailsComponent},
  {path:'privacy',component:PrivacyComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
