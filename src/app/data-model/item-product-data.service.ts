import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import {  Observable } from 'rxjs';
import {ItemProduct} from './class-data.model'

@Injectable({
  providedIn: 'root',
})
export class ItemProductDataService {

  readonly _controllerItemProductPath: string = 'ProductItem';
  //[Route("api/[controller]/[action]")]--api server
  readonly _controllerItemProdctActionPath:string='GetImages'


  GetUrl(): string {
    return environment.apiLocalHost + '/' + this._controllerItemProductPath+'/'+this._controllerItemProdctActionPath;
  }

  GetUrlImg():string{
    return environment.imgHost;
  }

  constructor(private http: HttpClient) {}

  GetItemProducts(idProduct: number): Observable<ItemProduct[]> {
    return this.http.get<ItemProduct[]>(this.GetUrl() + '/' + idProduct);
  }

}
