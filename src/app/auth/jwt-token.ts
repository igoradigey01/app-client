import {Injectable} from "@angular/core";
import {GlobalVar} from '../globalVar';
import {AuthVar} from  './authVar';
import { HttpClient , HttpHeaders} from '@angular/common/http';



@Injectable()
export class JwtToken {
//------------------------------------------------------------
private readonly accessTokenName:string ='access_token';
private result:boolean;

constructor(
  private http: HttpClient,
  private globalVar:GlobalVar,
  private authVar:AuthVar
){

}

//-Создать
Set(access_token:string):void{
  localStorage.setItem(this.accessTokenName, access_token);
}
 // Удалить
Clear():void{
  localStorage.removeItem(this.accessTokenName);
}
// Получить
Get():string{
  return localStorage.getItem(this.accessTokenName);
}

  //token существует в репозитории?
 Exists():boolean{
  // cделать запрос к IsValid сервера вернуть true елси ок или false ?// или  пренаправить на авторизациюж?---
 if(this.Get()){
  //throw new Error("Not implict");
  return true;
 }
 else{
   this.globalVar.userAuth=false;
   return false;}  // если строка пустая или не определена
 //let a;
 //let b = null;
// let c = "";

}

IsAdmin():boolean{
  let jwt =this.Get();
  let dataJwt=  jwt.split('.')[1];
  let decodeData=atob(dataJwt);
  let  data=JSON.parse(decodeData);
 // console.log("decodeData--"+decodeData);
 // console.log("data--"+data.role);
 // throw new Error("not impliment exeption");
  if(data.role==="Admin"){return true;}
 return false;

}




}
