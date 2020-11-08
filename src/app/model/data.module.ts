import { NgModule } from "@angular/core";
import { ProductRepository } from "./product.repository";
import { StaticDataSource } from "./static.datasource";
import { HttpClientModule } from '@angular/common/http';

@NgModule({
    providers: [ProductRepository, StaticDataSource]
})
export class DataModule { }
