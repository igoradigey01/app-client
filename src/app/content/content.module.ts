import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentRoutingModule } from './content-routing.module';
import {KatalogComponent} from './katalog/katalog.component';
import {BgCarouselComponent} from './bg-carousel/bg-carousel.component'
import {ContentComponent} from './content.component'


@NgModule({
  declarations: [
   KatalogComponent,
    BgCarouselComponent,
    ContentComponent,

  ],
  imports: [
    CommonModule,
    ContentRoutingModule
  ],
  exports: [
   KatalogComponent,
    BgCarouselComponent,
    ContentComponent,
  ]
})
export class ContentModule { }
