import { Component, OnInit } from '@angular/core';
import {GlobalVar} from '../../globalVar';


@Component({
  selector: 'app-header',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})

 export class NavBarComponent implements OnInit {

  constructor(
    private globlVar:GlobalVar
    ) {}

  ngOnInit(): void {
        }
  public getUsrAuht():boolean{
    return this.globlVar.userAuth;
  }

  public getUsrAdmin():boolean{
    return this.globlVar.isAdimin;
  }
}
