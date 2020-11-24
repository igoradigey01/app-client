import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { from } from 'rxjs';
import { BgCarouselComponent} from './bg-carousel/bg-carousel.component';


const routes: Routes = [
  {path:'',component:BgCarouselComponent},
  {path:'product/:katalogId',loadChildren:()=>import('./../content-lazy/content-lazy.module').then(m=>m.ProductModule) },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContentRoutingModule { }
