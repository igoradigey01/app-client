import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import {  Observable } from 'rxjs';
import {Image,Katalog,Product} from './class-data.model'

@Injectable({
  providedIn: 'root',
})
export class ItemProductDataService {

  readonly _controllerItemProductPath: string = 'ProductItem';
  //[Route("api/[controller]/[action]")]--api server
  readonly _controllerItemProdctActionPath:string='GetImages'
  //----------------------------
  readonly _controllerProductPath: string = 'product';
  readonly _controllerKatalogPath: string = 'katalog';


  GetUrl(): string {
    return environment.apiLocalHost + '/' + this._controllerItemProductPath+'/'+this._controllerItemProdctActionPath;
  }

  GetUrlImg():string{
    return environment.imgHost;
  }
  GetUrlKatalog(): string {
    return environment.apiLocalHost + '/' + this._controllerKatalogPath;
  }

  GetUrlProduct(): string {
    return environment.apiLocalHost + '/' + this._controllerProductPath;
  }

  constructor(private http: HttpClient) {}

  GetImages(idProduct: number): Observable<Image[]> {
    console.log("getItemProducts-repository(idProduct )--"+idProduct);
    return this.http.get<Image[]>(this.GetUrl() + '/' + idProduct);
  }
  GetKatalogs(): Observable<Katalog[]> {
    //  console.log("DataServise---ProductType-test")
    return this.http.get<Katalog[]>(this.GetUrlKatalog());
  }

  GetProducts(idKatalog: number): Observable<Product[]> {
    return this.http.get<Product[]>(this.GetUrlProduct() + '/' + idKatalog);
  }

}
