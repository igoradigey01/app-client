import { Injectable } from '@angular/core';
import {User} from './../data-model/class-data.model'
import {  Observable} from 'rxjs';
import {  tap } from 'rxjs/operators';
import { HttpClient , HttpHeaders} from '@angular/common/http';
import {JwtToken} from './jwt-token';
import {AuthVar} from './authVar';

//--------------------------------------------------
export class Login{

  public email: string ;

  public password: string;
}
//----------------------------------------------



@Injectable()
export class AuthService {

  private url(url: string):string {

   return this.authVar.GetUrl(url);
  }
  //----------

  constructor(
    private http: HttpClient,
    private jwtToken:JwtToken,
    private authVar:AuthVar

    ) { }

  //------------------- Login------------------------

  logIn(login : Login):Observable<any>{

  // const body={}


  let loginPath:string="Login";

  return this.http.post(this.url(loginPath),login).pipe(tap
     (
    res => {
      this.jwtToken.Set( res.access_token);
    }

     )
    );

  }

//--------------------- Register User new--------------------
  RegisterNewUser(user:User):Observable<User>{
    /*
    */
   // throw new Error("Not implict");
   let addUserPath:string='Register';

    return this.http.post(this.url(addUserPath),user);
  }

  //----------- LogOff-------------------------------
  // logOff клиент удаляет jwt token в хранилище Local Storage

  // ---------------REST CRUD APIs Profile---------------
  getUserProfile():Observable<User>{
    let path="Profile";
    const token:string = this.jwtToken.Get();

   return  this.http.get(this.url(path),{headers:new HttpHeaders().set('Authorization',`Bearer ${token}`)});//

  }

  SetUserProfile(user:User):Observable<User>{

    // throw new Error("Not implict");
     let addUserPath:string='Edit';
     const token:string = this.jwtToken.Get();

    return this.http.post(this.url(addUserPath),user,{headers:new HttpHeaders().set('Authorization',`Bearer ${token}`)});


  }

   deleteUserProfile(id:string):Observable<any>{

    throw new Error("Not implict");

   }


   IsUserValid():Observable<any>{
    let path:string='IsValid';
    const token:string = this.jwtToken.Get();


    return this.http.get(this.authVar.GetUrl(path),{headers:new HttpHeaders().set('Authorization',`Bearer ${token}`)}) ;

  }




}
