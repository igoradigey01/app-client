import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
// ----Firebase services + enviorment module---

import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';
//import { AngularFireDatabaseModule } from '@angular/fire/database'; 15.08.20
import { HttpClientModule } from '@angular/common/http';

//--- auth-module---
import { routes } from './app-routing.module';

import { GlobalVar } from './globalVar';

//----------------------- footer module -----------
import { FooterModule } from './footer/footer.module';
import { HeaderModule } from './header/header.module';
import { ContentModule } from './content/content.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// глобальные переменные для приложения

@NgModule({
  declarations: [AppComponent, PageNotFoundComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,

    //------------- auht-module---
    RouterModule.forRoot(routes),
    //--------- footer-module ----------
    FooterModule,
    HeaderModule,
    ContentModule,

    //----------- firebas ---------------
    AngularFireModule.initializeApp(environment.firebaseConfig),

    BrowserAnimationsModule,
  ],
  providers: [
    //    {provide:HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },                  // authInterceptorProviders,
    GlobalVar, //18.08.20-------------- глобалльные пременные
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
