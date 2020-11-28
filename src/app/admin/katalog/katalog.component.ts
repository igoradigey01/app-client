import { Component, OnInit } from '@angular/core';

import { KatalogDataService } from './../../data-model/katalog-data.service';
import { Katalog } from './../../data-model/class-data.model';
import {FormGroup, FormControl, Validators,FormBuilder,AbstractControl, ValidatorFn } from '@angular/forms';

@Component({
  selector: 'app-product',
  templateUrl: './katalog.component.html',
  styleUrls: ['./katalog.component.css'],
  providers: [KatalogDataService],
})
export class KatalogComponent implements OnInit {
  public _selectedKagalog: Katalog = new Katalog(-1,''); //выбор Kalog item

  //-----------------------------------
  //_katalog: Katalog =null;    // new Katalog(-1,'');   // изменяемый item Katlog
  _katalogs: Katalog[] = null; // массив items katalog
  _flagViewMode: string = 'default'; // табличный режим

  constructor(private _repository: KatalogDataService) {}

  ngOnInit(): void {
    this.loadKatalogs();
  }

  //----------------------

  loadKatalogs() {
    this._repository.GetKatalogs().subscribe((data) => (this._katalogs = data));
  }

  changeCategory(item?: Katalog) {
    this._selectedKagalog = item;
    this._flagViewMode = 'edit';
  }
  //--------------------

  addItem() {
    this._flagViewMode = 'create';
    this._selectedKagalog= new Katalog(-1,'');
  }

  deleteItem() {
    this._repository.DeleteKatalog(this._selectedKagalog.id)
            .subscribe(data => this.loadKatalogs())
            this.cancel();
  }

  saveItem() {
    if (this._selectedKagalog.id == -1) {
      this._selectedKagalog.id=0;
      this._repository
        .CreateKatalog(this._selectedKagalog)
        .subscribe((data: Katalog) => this._katalogs.push(data));
    } else {
      this._repository
        .UpdateKatalog(this._selectedKagalog)
        .subscribe((data) => this.loadKatalogs());
    }

    this.cancel();
  }

  cancel() {
    this._flagViewMode = 'default';
  }
}
