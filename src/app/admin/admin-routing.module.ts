import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import{AdminComponent} from './admin/admin.component';
import{KatalogComponent} from './katalog/katalog.component';
import{ProductComponent} from './product/product.component';
import{ItemProductComponent} from './item-product/item-product.component'
import{ProductTypeComponent} from './product-type/product-type.component';
import{InfoComponent} from './info/info.component';
import {NomenclatureComponent} from './nomenclature/nomenclature.component'
import { from } from 'rxjs';

const routes: Routes = [
  {path:'',component:AdminComponent},
  {path:'katalog',component:KatalogComponent},
  {path:'product',component:ProductComponent},
  {path:'item-product',component:ItemProductComponent},
  {path:'type-product',component:ProductTypeComponent},
  {path:'info',component:InfoComponent},
  {path:'nomenclature',component:NomenclatureComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
