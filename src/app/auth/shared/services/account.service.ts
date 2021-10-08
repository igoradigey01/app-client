import { Injectable } from '@angular/core';
import { Login } from './../_interfaces/login-model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Constants } from './../constants';
import { AuthModule } from './../../auth.module';
import { TokenManagerService } from './tokenManager.services';
import { TokenApiModel } from './../_interfaces/token-api-model';

@Injectable({
  providedIn: AuthModule,
})
export class AccountService {
  readonly _urlAccoutController: string = Constants.clientRoot + '/Account';
  readonly _urlLogin = this._urlAccoutController + '/Login';

  constructor(
    private http: HttpClient,
    private tokenManager: TokenManagerService
  ) {}

 public login(credentials: JSON): Observable<any> {
    return this.http
      .post(this._urlLogin, credentials, {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
        }),
      })
      .pipe(
        tap(
          (res) => {
            let token = res as TokenApiModel;
            this.tokenManager.SetAccessToken(token.access_token);
            this.tokenManager.SetRefreshToken(token.refresh_token);
          },
          (error) => {
            console.log(error);
          }
        )
      );
  }
}
