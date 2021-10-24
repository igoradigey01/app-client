import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentRoutingModule } from './content-routing.module';
import {KatalogComponent} from './katalog/katalog.component';



@NgModule({
  declarations: [
   KatalogComponent,



  ],
  imports: [
    CommonModule,
    ContentRoutingModule
  ],
  exports: [
   KatalogComponent,
    
  ]
})
export class ContentModule { }
