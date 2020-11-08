import { Injectable } from '@angular/core';
import {Nomenclature} from './data.model';
import { StaticDataSource } from './static.datasource';

@Injectable()
export class NomenclatureRepository {

  private _nomenclatures: Nomenclature[] = [];

  constructor(private dataSource: StaticDataSource) {

    dataSource.getNomenclatures().subscribe(d =>
      this._nomenclatures =d);
  }




  getNomenclatures():Nomenclature[] {
    return this._nomenclatures;
  }

  getNomenclature(cateoryId: number): Nomenclature {
    return this._nomenclatures.find(c => c.id == cateoryId);
  }
}
