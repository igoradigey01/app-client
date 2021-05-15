import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './content-lazy-routing.module';
import { ProductComponent } from './product/product.component';
import { ItemProductComponent } from './item-product/item-product.component';


@NgModule({
  declarations: [
    ProductComponent,
    ItemProductComponent
  ],
  imports: [
    CommonModule,
    ProductRoutingModule
  ],
  exports:[
    ProductComponent
  ]
})
export class ProductModule { }
