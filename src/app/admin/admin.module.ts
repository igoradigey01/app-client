import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { KatalogComponent } from './katalog/katalog.component';

import { NomenclatureComponent } from './nomenclature/nomenclature.component';

import { AdminComponent } from './admin/admin.component';
import{FormsModule} from '@angular/forms';
import { ProductComponent } from './product/product.component';
import { UploadFilesComponent } from './upload-files/upload-files.component';
import { ItemProductComponent } from './item-product/item-product.component';
import { ProductTypeComponent } from './product-type/product-type.component';
import { InfoComponent } from './info/info.component';
import {LazyAdminServiceModule} from '../data-model/lazy-admin-service/lazy-admin-service.module'

import { CropUploadFilesComponent } from './crop-upload-files/crop-upload-files.component';
import { ImageCropperModule } from 'ngx-image-cropper';//03.05.21


@NgModule({
  declarations: [
    KatalogComponent,
    NomenclatureComponent,
    AdminComponent,
    ProductComponent,
    UploadFilesComponent,
    ItemProductComponent,
    ProductTypeComponent,
    InfoComponent,
    CropUploadFilesComponent
    ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    LazyAdminServiceModule,
    ImageCropperModule
  ]
})
export class AdminModule { }
