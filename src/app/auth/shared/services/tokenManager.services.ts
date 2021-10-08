import { Injectable } from '@angular/core';
import { AuthModule } from './../../auth.module';
import {GlobalVar } from './../../../globalVar';

@Injectable({
  providedIn: AuthModule
})
export class TokenManagerService {
  private readonly accessTokenName: string = 'access_token';
  private readonly refreshTokenName: string = 'refresh_token';


  constructor(
    private globalVar: GlobalVar

  ) { }

public SetAccessToken(access_token: string): void {
    localStorage.setItem(this.accessTokenName, access_token);
  }
  // Удалить
 public ClearAccessToken(): void {
    localStorage.removeItem(this.accessTokenName);
  }
  // Получить
 public GetAccessToken(): string {
    return localStorage.getItem(this.accessTokenName);
  }

  //token существует в репозитории?
 public ExistsAccessToken(): boolean {
    // cделать запрос к IsValid сервера вернуть true елси ок или false ?// или  пренаправить на авторизациюж?---
    if (this.GetAccessToken()) {
      //throw new Error("Not implict");
      return true;
    } else {
      this.globalVar.userAuth = false;
      return false;
    } // если строка пустая или не определена
    //let a;
    //let b = null;
    // let c = "";
  }
  //--------------- Refresh token----------
  public SetRefreshToken(refresh_token: string): void {
    localStorage.setItem(this.refreshTokenName, refresh_token);
  }
  // Удалить
 public ClearRefreshToken(): void {
    localStorage.removeItem(this.refreshTokenName);
  }
  // Получить
 public GetRefreshToken(): string {
    return localStorage.getItem(this.refreshTokenName);
  }

  //token существует в репозитории?
 public ExistsRefreshToken(): boolean {
  throw new Error("not impliment exeption");
 }

 public IsAdmin(): boolean {
    let jwt = this.GetAccessToken();
    let dataJwt = jwt.split('.')[1];
    let decodeData = atob(dataJwt);
    let data = JSON.parse(decodeData);
    console.log('decodeData--' + decodeData);
    console.log('data--' + data.role);
    // throw new Error("not impliment exeption");
    if (data.role === 'admin') {
      return true;
    }
    return false;
  }

  public IsManager(): boolean {
   // throw new Error("not impliment exeption");
    let jwt = this.GetAccessToken();
    let dataJwt = jwt.split('.')[1];
    let decodeData = atob(dataJwt);
    let data = JSON.parse(decodeData);
    console.log('decodeData--' + decodeData);
    console.log('data--' + data.role);
    // throw new Error("not impliment exeption");
    if (data.role === 'manager') {
      return true;
    }
    return false;
  }

  public IsShopper(): boolean {
    // throw new Error("not impliment exeption");
     let jwt = this.GetAccessToken();
     let dataJwt = jwt.split('.')[1];
     let decodeData = atob(dataJwt);
     let data = JSON.parse(decodeData);
     console.log('decodeData--' + decodeData);
     console.log('data--' + data.role);
     // throw new Error("not impliment exeption");
     if (data.role === 'shopper') {
       return true;
     }
     return false;
   }
}
