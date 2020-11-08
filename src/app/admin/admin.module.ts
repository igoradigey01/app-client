import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { ProductComponent } from './product/product.component';
import { ProductTypeComponent } from './product-type/product-type.component';
import { NomenclatureComponent } from './nomenclature/nomenclature.component';
import { NomenclatureTypeComponent } from './nomenclature-type/nomenclature-type.component';
import { AdminComponent } from './admin/admin.component';
import { ShopingTypeComponent } from './shoping-type/shoping-type.component';


@NgModule({
  declarations: [
    ProductComponent,
    ProductTypeComponent,
    NomenclatureComponent,
    NomenclatureTypeComponent,
    AdminComponent,
    ShopingTypeComponent],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
