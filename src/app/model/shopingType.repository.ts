import { Injectable } from '@angular/core';
import { ShopingType} from './data.model';
import { StaticDataSource } from './static.datasource';

@Injectable()
export class ShopingTypeRepository {

  private _shopingTypes: ShopingType[] = [];

  constructor(private dataSource: StaticDataSource) {

    dataSource.getShopingTypes().subscribe(d =>
      this._shopingTypes =d);
  }




  getShopingTypes():ShopingType[] {
    return this._shopingTypes;
  }

  getShopingType(cateoryId: number): ShopingType {
    return this._shopingTypes.find(c => c.id == cateoryId);
  }
}
