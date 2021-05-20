import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContentModule } from './content/content.module';
import { HeaderModule } from './header/header.module';

import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

//import { from } from 'rxjs';
//import { from } from 'rxjs';

export const routes: Routes = [
  { path: '', loadChildren: () => ContentModule },

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
  { path: 'menu', loadChildren: () => HeaderModule },

  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
