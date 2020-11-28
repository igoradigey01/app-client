import { Injectable } from '@angular/core';
import {  Observable } from 'rxjs';
import {Katalog} from './class-data.model';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';



@Injectable()
export class KatalogDataService {

  readonly _controllerPath:string="katalog";
  //readonly _url:string="Type";

  GetUrl():string{
  return  environment.apiLocalHost + '/' + this._controllerPath;
   }
   productTypes:Katalog[];

  constructor(
    private http:HttpClient
  ) { }

    GetKatalogs():Observable<Katalog[]>{
    //  console.log("DataServise---ProductType-test")
      return this.http.get<Katalog[]> (this.GetUrl());
  }

  CreateKatalog(katalog:Katalog){
    console.log("CreateKatalog --post"+katalog.id+"--"+katalog.name);
    return this.http.post(this.GetUrl(),katalog);
  }

   UpdateKatalog(katalog:Katalog){
    console.log("UpdateKatalog --put"+katalog.id+"--"+katalog.name);

    return this.http.put(this.GetUrl()+'/'+katalog.id,katalog);


   }

   DeleteKatalog(id:number){
    console.log("DeleteKatalog --delete--"+id);
    return this.http.delete(this.GetUrl()+'/'+id);

   }
}
