import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import {ModelDataService} from './../../data-model/model-data.servisce';
import{Katalog,Model} from './../../data-model/class-data.model';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-model',
  templateUrl: './model.component.html',
  styleUrls: ['./model.component.css'],
  providers: [ModelDataService]
})
export class ModelComponent implements OnInit {

  _katalogs:Katalog[];

  _models:Model[]=[new Model(-1,'',0,null,null,null)];
  _flagPanel1:boolean=true;
  _flagPanel2:boolean=false;
  _flagKatalogHiden=false;
  _flagViewMode:string="default";

  _selectedKagalog:Katalog=new Katalog(-1,"");


  constructor(private _repository:ModelDataService) { }

  ngOnInit(): void {
    this._repository.GetKatalogs().subscribe(d=>this._katalogs=d);


  }
  // ngClass flags
  ViwePanel(){
    this._flagPanel1=!this._flagPanel1;
    this._flagPanel2=!this._flagPanel2;
    this._flagKatalogHiden=!this._flagKatalogHiden;
  }

  changeKagalog(item?: Katalog) {
    this._selectedKagalog = item;
   // this._flagViewMode = 'edit';
   this._repository.GetModel(item.id).subscribe(d=>this._models=d);
  }

}
