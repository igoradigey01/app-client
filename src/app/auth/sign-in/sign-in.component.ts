import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import {AuthService} from '../auth.service';
import { GlobalVar} from '../../globalVar';
import { HttpErrorResponse } from '@angular/common/http';
import {JwtToken} from '../jwt-token';
import { map } from 'rxjs/operators';





@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']

})
export class SignInComponent implements OnInit {

  _form: FormGroup;
  _flagButoon:boolean=false;
  _errorMgs: string[]=[];
/** вход пользователья ;создание токена */
  constructor(
    private formBuilder: FormBuilder,
        private repozitoryDB:AuthService,
         private globalVal:GlobalVar,
         private router: Router,
         private jwtToken:JwtToken
  ) { }

  ngOnInit(): void {

    this._form = this.formBuilder.group({
      email: '',
      password: '',
  });
  this.globalVal.userAuth=false;
  this.repozitoryDB.IsUserValid().pipe(map(()=>
   {
        if(this.jwtToken.Exists()){
                    if(this.jwtToken.IsAdmin()){
                           this.globalVal.isAdimin=true;
                            }
                    this.globalVal.userAuth =true;
        }
  }
    )).subscribe();

    console.log("GlobalVal.userAuth--"+this.globalVal.userAuth);
    if(this.jwtToken.Exists()){
         console.log('JwtToken is Valid-----'+this.jwtToken.Exists());
          console.log("IsAdmin---"+  this.jwtToken.IsAdmin());
    }

  }


  submitForm(){

   // this._form.disable();
   this._errorMgs=[];

    this.repozitoryDB.logIn( this._form.value ).subscribe(
      next=>{
        this.globalVal.userAuth=true;
        this._flagButoon=true;
        if(this.jwtToken.IsAdmin()){
          this.globalVal.isAdimin=true;
        }
        this.router.navigateByUrl('');

      },
     ( error:HttpErrorResponse) => {
      let body:string;
        if(error.status==401){
        this._flagButoon=false;
        this.globalVal.userAuth=false;
        body="Не верный логин или пароль";


        }
        else{
          body="Ошибка соединения с сервером -Сообщиете Администаратору Pесурса";


        }
        this._errorMgs.push(body);
      }

      );
   //   this.globalVal.userAuth=false;26.08.20
   // this.router.navigate(['/auth/sing-off']);

    //console.log('login',this._form.value);
    //throw new Error("---Metod не задан --onchengFlag()--body-shop.component.ts")
  }

}

