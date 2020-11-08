import { Injectable } from '@angular/core';
import {  Observable } from 'rxjs';
import {ProductType} from '../model/data.model';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { map } from 'rxjs/operators';


@Injectable()
export class DataService {

  readonly _controllerPath:string="Product";
  readonly _url:string="Type";
GetUrl():string{
  return  environment.apiLocalHost + '/' + this._controllerPath+'/'+this._url;

}
   productTypes:ProductType[];

  constructor(
    private http:HttpClient
  ) { }

    GetProductType():Observable<ProductType[]>{
      console.log("DataServise---ProductType-test")
      return this.http.get<ProductType[]> (this.GetUrl());

  }
}
