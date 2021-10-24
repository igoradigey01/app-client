import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HttpClientModule } from '@angular/common/http';

import { GlobalVar } from './globalVar';

//----------------------- footer module -----------

import { HeaderModule } from './header/header.module';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MaterialModule} from './material/material.module';
import { NavBarComponent } from './header/menu/menu.component';
import {KatalogComponent} from './content/katalog/katalog.component';
import {BgCarouselComponent} from './content/bg-carousel/bg-carousel.component'
// глобальные переменные для приложения

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    NavBarComponent,
    KatalogComponent,
    BgCarouselComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    FormsModule,
    HttpClientModule,
   // RouterModule,
//    RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' }),
    //--------- footer-module ----------

    HeaderModule,

    BrowserAnimationsModule,
  ],
  providers: [
    //    {provide:HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },                  // authInterceptorProviders,
    GlobalVar, //18.08.20-------------- глобалльные пременные
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
