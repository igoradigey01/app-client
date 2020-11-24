import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { ProductComponent } from './product/product.component';

import { NomenclatureComponent } from './nomenclature/nomenclature.component';

import { AdminComponent } from './admin/admin.component';



@NgModule({
  declarations: [
    ProductComponent,

    NomenclatureComponent,

    AdminComponent
    ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
