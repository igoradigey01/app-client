import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './content-lazy-routing.module';
import { ProductComponent } from './product/product.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { PrivacyComponent } from './privacy/privacy.component';


@NgModule({
  declarations: [
    ProductComponent,
    ProductDetailsComponent,
    PrivacyComponent
  ],
  imports: [
    CommonModule,
    ProductRoutingModule
  ],
  exports:[
    ProductComponent
  ]
})
export class ContentLazyModule { }
