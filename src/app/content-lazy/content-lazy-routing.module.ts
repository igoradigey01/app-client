import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { from } from 'rxjs';
import { ProductComponent} from "./product/product.component";
import{ItemProductComponent} from "./item-product/item-product.component"


const routes: Routes = [
  {path:'',component:ProductComponent},
  {path:'item',component:ItemProductComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
