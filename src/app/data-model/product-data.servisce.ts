import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';
import {map, filter} from 'rxjs/operators';
import { Katalog, Product, TypeProduct } from './class-data.model';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import {LazyAdminServiceModule} from './lazy-admin-service/lazy-admin-service.module';

@Injectable(
  {providedIn:LazyAdminServiceModule}
)
export class ProductDataService {
  readonly _controllerPath: string = 'product';
  readonly _controllerKatalogPath: string = 'katalog';
  readonly _controllerTypeProduct:string ='typeProduct';
  readonly _controllerImage:string='image';

  _nameKatalog: any = '';
  //readonly _url:string="Type";

  GetUrl(): string {
    return environment.apiLocalHost + '/' + this._controllerPath;
  }

  GetUrlImg():string{
    return environment.imgHost;
  }

  GetUrlBlobImag():string{
    return environment.apiLocalHost + '/' + this._controllerImage;
  }

  GetUrlKatalog(): string {
    return environment.apiLocalHost + '/' + this._controllerKatalogPath;
  }

  GetUrlTypeProduct():string{
    return environment.apiLocalHost+'/'+this._controllerTypeProduct;
  }

  constructor(private http: HttpClient) {}

  //-----------------------
  GetKatalogs(): Observable<Katalog[]> {
    //  console.log("DataServise---ProductType-test")
    return this.http.get<Katalog[]>(this.GetUrlKatalog());
  }

  //-----------------------
  GetTypeProduct():Observable<TypeProduct[]>{
    return this.http.get<TypeProduct[]>(this.GetUrlTypeProduct());
  }

  //-------------------
  GetProducts(idKatalog: number): Observable<Product[]> {
    return this.http.get<Product[]>(this.GetUrl() + '/' + idKatalog);
  }

  GetBlobIMG(name:string):Observable<Blob>{
   // return this.http.get(src,{responseType: 'blob'});
   let path=this.GetUrlBlobImag()+'/'+name;
   return this.http.get(path,{responseType: 'blob'});
  }



  //-----------------------
  CreateProduct(item: Product) {
    /*
    // console.log("CreateKatalog --post"+item.id+"--"+item.name);
    //let fileToUpload = <File>files[0];
    const formData = new FormData();
    if (item.photo != null) {
      // console.log('photo item.photo.name' + item.photo.name);

      formData.append(item.photo.name, item.photo);
    }

    Object.keys(item).forEach((key) => {
      console.log(key + '' + item[key]);
      if (key != 'photo') formData.append(key, item[key]);
    });
    */
    const formData = new FormData();
    // photo- base64 string
  Object.keys(item).forEach((key) => {
  //  console.log(key + '' + item[key]);
    //if (key != 'photo') 04..5.21
     formData.append(key, item[key]);
  });

    return this.http.post(this.GetUrl(), formData,{ reportProgress: true,observe: 'events'});
  }

  //-------------
  UpdateProduct(item: Product) {
    /*
    //  console.log('UpdateModel(item:Model)--put' + item.id + '--' + item.name);
    const formData = new FormData();
    if (item.photo != null) {
      // console.log('photo item.photo.name' + item.photo.name);

      formData.append(item.photo.name, item.photo);
    }
    Object.keys(item).forEach((key) => {
      console.log(key + '' + item[key]);
      if (key != 'photo') formData.append(key, item[key]);
    });
    */
    const formData = new FormData();
    // photo- base64 string
  Object.keys(item).forEach((key) => {
  //  console.log(key + '' + item[key]);
    //if (key != 'photo') 04..5.21
     formData.append(key, item[key]);
  });
    return this.http.put(this.GetUrl() + '/' + item.id, formData,
    { reportProgress: true ,
      observe: 'events' // по умолчанию body  (observe?: 'body',|'events'-(HttpEvent<T>),|'response')
     });
  }

  //--------------------
  DeleteProduct(id: number) {
    // console.log('DeleteModel --delete--' + id);
    return this.http.delete(this.GetUrl() + '/' + id);
  }
}
