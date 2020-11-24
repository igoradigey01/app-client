import { Injectable } from '@angular/core';
import {  Observable } from 'rxjs';
import {Katalog} from './class-data.model';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';



@Injectable()
export class KatalogDataService {

  readonly _controllerPath:string="Product";
  readonly _url:string="Type";

  GetUrl():string{
  return  environment.apiLocalHost + '/' + this._controllerPath+'/'+this._url;
   }
   productTypes:Katalog[];

  constructor(
    private http:HttpClient
  ) { }

    GetKatalogs():Observable<Katalog[]>{
      console.log("DataServise---ProductType-test")
      return this.http.get<Katalog[]> (this.GetUrl());

  }
}
