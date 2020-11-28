import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import{AdminComponent} from './admin/admin.component';
import{KatalogComponent} from './katalog/katalog.component';
import{ModelComponent} from './model/model.component';

const routes: Routes = [
  {path:'',component:AdminComponent},
  {path:'katalog',component:KatalogComponent},
  {path:'model',component:ModelComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
