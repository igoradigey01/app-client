import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import {ModelDataService} from './../../data-model/model-data.servisce';
import{Katalog,Model} from './../../data-model/class-data.model';

@Component({
  selector: 'app-model',
  templateUrl: './model.component.html',
  styleUrls: ['./model.component.css']
})
export class ModelComponent implements OnInit {

  _katalogs:Katalog[];


  constructor(private _repository:ModelDataService) { }

  ngOnInit(): void {
    
  }

}
