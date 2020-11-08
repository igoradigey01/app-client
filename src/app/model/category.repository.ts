import { Injectable } from '@angular/core';
//import { Observable } from 'rxjs';
import { ProductType } from './data.model';
import { StaticDataSource } from './static.datasource';

@Injectable()
export class CategoryRepository {

  private _categories: ProductType[] = [];

  constructor(private dataSource: StaticDataSource) {

    dataSource.getCategorys().subscribe(d =>
      this._categories =d);
  }




  getCategories():ProductType[] {
    return this._categories;
  }

  getCategory(cateoryId: number): ProductType {
    return this._categories.find(c => c.id == cateoryId);
  }
}
