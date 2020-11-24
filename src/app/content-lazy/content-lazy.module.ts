import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './content-lazy-routing.module';
import { ModelComponent } from './model/model.component';


@NgModule({
  declarations: [
    ModelComponent
  ],
  imports: [
    CommonModule,
    ProductRoutingModule
  ],
  exports:[
    ModelComponent
  ]
})
export class ProductModule { }
