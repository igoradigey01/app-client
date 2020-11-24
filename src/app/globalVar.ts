//import {Observer,Observable} from 'rxjs';
import {Injectable} from "@angular/core";
import { User } from './data-model/class-data.model';

@Injectable()
export class GlobalVar {
  userAuth:boolean=false; // авторизован ли пользователь ? иконка входа цвет
   userSerialize:User=null; // передача данных на сервер в параметрах // edit-profile,profile
   isAdimin:boolean=false;  // является ли пользователь админ,для перехода в админ модуль

}
