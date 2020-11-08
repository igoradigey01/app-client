import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import {JwtToken} from '../jwt-token';
import { GlobalVar } from '../../globalVar';




@Component({
  selector: 'app-log-off',
  templateUrl: './log-off.component.html',
  styleUrls: ['./log-off.component.css']
})


export class LogOffComponent implements OnInit {



  constructor(
        private router: Router,
        private globalVal:GlobalVar,
        private jwtToken:JwtToken

  ) { }

  ngOnInit(): void {
    this.jwtToken.Clear();
   this.globalVal.userAuth=false;
   this.globalVal.isAdimin=false;
   this.router.navigate(['']);

  }



}
