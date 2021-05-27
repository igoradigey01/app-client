import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Image, Katalog, Product } from './class-data.model';
import { LazyAdminServiceModule } from './lazy-admin-service/lazy-admin-service.module';

@Injectable({ providedIn: LazyAdminServiceModule })
export class ProductDetailsDataService {
  readonly _controllerProductDetailsPath: string = 'ProductItem';
  readonly _controllerProductPath: string = 'product';
  readonly _controllerKatalogPath: string = 'katalog';
  readonly _controllerBlobImage: string = 'image';
  //[Route("api/[controller]/[action]")]--api server
  readonly _controllerProductDetails_Action_GetImages: string = 'GetImages';
  readonly _controllerProductDetails_Action_AddImage: string = 'CreateImage';
  readonly _controllerProductDetails_Action_DeleteImage:string='Delete';
  readonly _controllerProductDetails_Action_GetItemProduct:string='GetItemProducts';
  //----------------------------

  private get GetUrlProductDetailsImages(): string {
    return (
      environment.apiLocalHost +
      '/' +
      this._controllerProductDetailsPath +
      '/' +
      this._controllerProductDetails_Action_GetImages
    );
  }
  private get GetUrlBlobImag(): string {
    return environment.apiLocalHost + '/' + this._controllerBlobImage;
  }

  private get AddUrl(): string {
    return (
      environment.apiLocalHost +
      '/' +
      this._controllerProductDetailsPath +
      '/' +
      this._controllerProductDetails_Action_AddImage
    );
  }

  private get DeleteUrl():string{
    return (
      environment.apiLocalHost +
      '/' +
      this._controllerProductDetailsPath +
      '/' +
      this._controllerProductDetails_Action_DeleteImage
    );

  }

  public get GetUrlImg(): string {
    return environment.imgHost;
  }
  private get GetUrlKatalog(): string {
    return environment.apiLocalHost + '/' + this._controllerKatalogPath;
  }

  private get GetUrlProduct(): string {
    return environment.apiLocalHost + '/' + this._controllerProductPath;
  }

  private get GetUrlProductDetails(): string {
    return environment.apiLocalHost + '/' + this._controllerProductDetailsPath;
  }

  constructor(private http: HttpClient) {}

  GetImages(idProduct: number): Observable<Image[]> {
    console.log('getItemProducts-repository(idProduct )--' + idProduct);
    return this.http.get<Image[]>(this.GetUrlProductDetailsImages + '/' + idProduct);
  }

  GetBlobIMG(name: string): Observable<Blob> {
    // return this.http.get(src,{responseType: 'blob'});
    let path = this.GetUrlBlobImag + '/' + name;
    return this.http.get(path, { responseType: 'blob' });
  }

  GetKatalogs(): Observable<Katalog[]> {
    //  console.log("DataServise---ProductType-test")
    return this.http.get<Katalog[]>(this.GetUrlKatalog);
  }

  GetProducts(idKatalog: number): Observable<Product[]> {
    return this.http.get<Product[]>(this.GetUrlProduct + '/' + idKatalog);
  }

  GetItemProducts(idProduct: number): Observable<Product> {
    // console.log(' Error("not impliment exsaption;;');
    return this.http.get<Product>(this.GetUrlProductDetails+'/' +this._controllerProductDetails_Action_GetItemProduct+'/' +idProduct);
  }

  AddImage(item: Image):Observable<any> {
    const formData = new FormData();
    // photo- base64 string
    Object.keys(item).forEach((key) => {
      //  console.log(key + '' + item[key]);
      //if (key != 'photo') 04..5.21
      formData.append(key, item[key]);
    });
    return this.http.post(this.AddUrl, formData,{ reportProgress: true,observe: 'events'});
  }
  DeleteImage(idImage: number):Observable<any> {

    console.log("----delete----");
    return this.http.delete(this.DeleteUrl+'/'+idImage);



  }
}
