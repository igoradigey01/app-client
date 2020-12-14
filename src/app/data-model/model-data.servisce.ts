import { Injectable } from '@angular/core';
import {  Observable } from 'rxjs';
import {Katalog, Model} from './class-data.model';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';



@Injectable()
export class ModelDataService {

  readonly _controllerPath:string="model";
  readonly _controllerKatalogPath:string="katalog";
  //readonly _url:string="Type";
  GetUrl():string{
    return  environment.apiLocalHost + '/' + this._controllerPath;
     }

  GetUrlKatalog():string{
    return  environment.apiLocalHost + '/' + this._controllerKatalogPath;

  }

  constructor(
      private http:HttpClient
    ) { }
    //-----------------------
    GetKatalogs():Observable<Katalog[]>{
      //  console.log("DataServise---ProductType-test")
        return this.http.get<Katalog[]> (this.GetUrlKatalog());
    }
   //-------------------
  GetModel(idKatalog:number):Observable<Model[]>{
       console.log("DataServise--- GetModel(idKatalog:number)-test--idKatog-"+idKatalog)
        return this.http.get<Model[]> (this.GetUrl()+'/'+idKatalog);
    }

    //-----------------------
  CreateModel(item:Model){
      console.log("CreateKatalog --post"+item.id+"--"+item.name);
      //let fileToUpload = <File>files[0];
      const formData = new FormData();
      console.log("photo  iii data"+item.photo+item.photo.name);

     formData.append('photo',item.photo,item.photo.name);
      /*
      formData.append('name',item.name);
      formData.append('idKatalog',item.idKatalog.toString());
      formData.append('price',item.price.toString());
      formData.append('markup',item.markup.toString());
      formData.append('deckription',item.description);
       */
      Object.keys(item).forEach(key => {
        //console.log( key+''+ item[key]);
         if(key!='photo')
        formData.append(key,item[key]);
    })
      return this.http.post(this.GetUrl(),formData);
    }
    //-------------
  UpdateModel(item:Model){
      console.log("UpdateModel(item:Model)--put"+item.id+"--"+item.name);

      return this.http.put(this.GetUrl()+'/'+item.id,item);
     }
     //--------------------
  DeleteModel(id:number){
      console.log("DeleteModel --delete--"+id);
      return this.http.delete(this.GetUrl()+'/'+id);

     }
}
