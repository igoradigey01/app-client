import { Injectable } from '@angular/core';
import {NomenclatureType} from './data.model';
import { StaticDataSource } from './static.datasource';

@Injectable()
export class NomenclatureTypeRepository {

  private _nomenclatureTypes: NomenclatureType[] = [];

  constructor(private dataSource: StaticDataSource) {

    dataSource.getNomenclatureTypes().subscribe(d =>
      this._nomenclatureTypes =d);
  }




  getNomenclatureTypes():NomenclatureType[] {
    return this._nomenclatureTypes;
  }

  getNomenclatureType(cateoryId: number): NomenclatureType {
    return this._nomenclatureTypes.find(c => c.id == cateoryId);
  }
}
