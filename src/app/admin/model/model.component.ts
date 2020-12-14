import { Component, OnInit } from '@angular/core';
import { from, throwError } from 'rxjs';
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

  _models:Model[]=[new Model(-1,'',0,-1,-1,'',null)];
  _flagPanel1:boolean=true;
  _flagPanel2:boolean=false;
  _flagKatalogHiden=false;
  _flagViewMode:string="default";
  _flagDisplayAddButton:boolean=true;

  _selectedKagalog:Katalog=new Katalog(-1,"");
  _selectedModel:Model=new Model(-1,'',-1,null,null,null);

  _dataFile:File=null;



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
    this._flagDisplayAddButton=true;
   this._repository.GetModel(item.id).subscribe(d=>this._models=d);
  }

  changeModel(item?:Model) {
    this._selectedModel = item;
    this._flagViewMode = 'edit';
  }

  addModel(){
    this._selectedModel= new Model(-1,'',-1,null,null,null);

    this._flagViewMode = 'create';

  }
  saveModel(){
    this._selectedModel.idKatalog=this._selectedKagalog.id;
    this._selectedModel.photo=this._dataFile;
    this._repository.CreateModel(this._selectedModel).subscribe(data=>{
      console.log("model componet saveModel-- "+ data);
    });
   // throwError("not impliment exeption");

  }
  deleteModel(){
    throwError("not impliment exeption");


  }
  cancel(){
    this._flagViewMode = 'default';
  }
  onSetFilePhoto(event:File){
    this._dataFile=event;
    console.log("fale name molel.component"+this._dataFile.name+" --"+this._dataFile);

  }

}
