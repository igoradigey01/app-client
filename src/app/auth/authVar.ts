import { Injectable } from '@angular/core';
import { environment } from './../../environments/environment';


@Injectable()
export class AuthVar {
readonly _authPath:string="Account"; //Account/LogIn
GetUrl(url:string):string{
  return  environment.apiLocalHost + '/' + this._authPath+'/'+ url;

}
}
