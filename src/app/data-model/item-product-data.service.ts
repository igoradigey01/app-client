import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import {  Observable } from 'rxjs';
import {Image,Katalog,Product} from './class-data.model';
import {LazyAdminServiceModule} from './lazy-admin-service/lazy-admin-service.module'

@Injectable(
  {providedIn:LazyAdminServiceModule}
)
export class ItemProductDataService {

  readonly _controllerItemProductPath: string = 'ProductItem';
  //[Route("api/[controller]/[action]")]--api server
  readonly _controllerItemProdctActionGetPath:string='GetImages'
  readonly _controllerItemProdctActionAddPath:string='CreateImage'
  //----------------------------
  readonly _controllerProductPath: string = 'product';
  readonly _controllerKatalogPath: string = 'katalog';


  GetUrl(): string {
    return environment.apiLocalHost + '/' + this._controllerItemProductPath+'/'+this._controllerItemProdctActionGetPath;
  }

  AddUrl():string{
    return environment.apiLocalHost+'/'+this._controllerItemProductPath+'/'+this._controllerItemProdctActionAddPath;
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

  AddImage(item:Image){

    const formData = new FormData();
      // photo- base64 string
    Object.keys(item).forEach((key) => {
    //  console.log(key + '' + item[key]);
      //if (key != 'photo') 04..5.21
       formData.append(key, item[key]);
    });
    return this.http.post(this.AddUrl(), formData);

  }
  DeleteImage(idImage:number){

  }

}
