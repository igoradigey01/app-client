import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {BgCarouselComponent} from './content/bg-carousel/bg-carousel.component'


import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

//import { from } from 'rxjs';
//import { from } from 'rxjs';

export const routes: Routes = [
  {path:'',component:BgCarouselComponent},

  //{path:'shop-categories/:categoryId',component:ProductComponent},

  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path: 'admin',
    loadChildren: () =>
      import('./admin/admin.module').then((m) => m.AdminModule),
  },
  {
    path: 'katalog/:katalogId',
    loadChildren: () =>
      import('./content-lazy/content-lazy.module').then(
        (m) => m.ContentLazyModule
      ),
  },
  {
    path: 'content-lazy',
    loadChildren: () =>
      import('./content-lazy/content-lazy.module').then(
        (m) => m.ContentLazyModule
      ),
  },
  // { path: 'menu', loadChildren: () => HeaderModule },
  {
    path: 'menu',
    loadChildren: () =>
      import('./header/header.module').then((m) => m.HeaderModule),
  },

  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
