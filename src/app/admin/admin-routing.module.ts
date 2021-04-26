import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { from } from 'rxjs';
import{AdminComponent} from './admin/admin.component';
import{KatalogComponent} from './katalog/katalog.component';
import{ProductComponent} from './product/product.component';
import{ItemProductComponent} from './item-product/item-product.component'
import{ProductTypeComponent} from './product-type/product-type.component'

const routes: Routes = [
  {path:'',component:AdminComponent},
  {path:'katalog',component:KatalogComponent},
  {path:'product',component:ProductComponent},
  {path:'item-product',component:ItemProductComponent},
  {path:'type-product',component:ProductTypeComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
