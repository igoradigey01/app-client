import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderRoutingModule } from './header-routing.module';
import{AboutComponent} from './about/about.component'
import{GarantiyaComponent} from './garantiya/garantiya.component'
import{KakZakazatComponent} from './kak-zakazat/kak-zakazat.component'
import{OplataIDostavkaComponent} from './oplata-i-dostavka/oplata-i-dostavka.component'
import {NavBarComponent} from './nav-bar/nav-bar.component'


@NgModule({
  declarations: [
    AboutComponent,
    GarantiyaComponent,
    KakZakazatComponent,
    OplataIDostavkaComponent,
    NavBarComponent
  ],
  imports: [
    CommonModule,
    HeaderRoutingModule
  ],
   exports:[
     AboutComponent,
     GarantiyaComponent,
     KakZakazatComponent,
     OplataIDostavkaComponent,
     NavBarComponent

   ]
})
export class HeaderModule { }
