import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ItemProductDataService {

  readonly _controllerItemProductPath: string = 'ProductItem';

  GetUrl(): string {
    return environment.apiLocalHost + '/' + this._controllerItemProductPath;
  }

  GetUrlImg():string{
    return environment.imgHost;
  }

  constructor(private http: HttpClient) {}
}
