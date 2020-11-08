import { Injectable } from '@angular/core';
import { Product } from './data.model';
import { StaticDataSource } from './static.datasource';
//import { HttpClient } from '@angular/common/http';
//import { map } from 'rxjs/operators';
//import { from, Observable } from 'rxjs';
//import {DataService} from './data.service'


@Injectable()
export class ProductRepository {
  private _products: Product[] = [];


  constructor(private dataSource:StaticDataSource) {
    dataSource.getProducts().subscribe((data) => {
      this._products = data;
    });

  }

  getProducts(categoryId: number): Product[] {
    return this._products.filter( p =>
      p.categoryId == categoryId
    );
  }






}
