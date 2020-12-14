import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { KatalogComponent } from './katalog/katalog.component';

import { NomenclatureComponent } from './nomenclature/nomenclature.component';

import { AdminComponent } from './admin/admin.component';
import{FormsModule} from '@angular/forms';
import { ModelComponent } from './model/model.component';
import { UploadFilesComponent } from './upload-files/upload-files.component';;


@NgModule({
  declarations: [
    KatalogComponent,
    NomenclatureComponent,
    AdminComponent,
    ModelComponent,
    UploadFilesComponent
    ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule
  ]
})
export class AdminModule { }
