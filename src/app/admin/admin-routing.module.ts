import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import{AdminComponent} from './admin/admin.component';
import{KatalogComponent} from './katalog/katalog.component';
import{ProductComponent} from './product/product.component';

const routes: Routes = [
  {path:'',component:AdminComponent},
  {path:'katalog',component:KatalogComponent},
  {path:'model',component:ProductComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
