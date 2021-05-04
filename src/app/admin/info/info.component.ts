import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import {InfoDataService} from '../../data-model/info-data.service';
//import {VertionInfo} from '../../data-model/class-data.model';




@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})

export class InfoComponent implements OnInit {

  _vertion:string='';

  constructor(
    private _repository:InfoDataService
  ) { }

  ngOnInit(): void {
    this._repository.GetVertion().subscribe((d)=>{this._vertion=d.v;

    });
  }

}
