import { Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { LazyAdminServiceModule } from './lazy-admin-service/lazy-admin-service.module';
import { VertionInfo } from './class-data.model';

@Injectable({ providedIn: LazyAdminServiceModule })
export class InfoDataService {
  readonly _controllerVertionPath: string = 'Version';

  private get GetUrl(): string {
    return environment.apiLocalHost + '/' + this._controllerVertionPath;
  }

  constructor(private _http: HttpClient) {}

  GetVertion(): Observable<VertionInfo> {
    console.log('Info-servise-getVertion()---------');
    return this._http.get<VertionInfo>(this.GetUrl);
  }
}
