import { Component, OnInit } from '@angular/core';

import {Katalog } from '../../data-model/class-data.model';
import {KatalogDataService} from '../../data-model/katalog-data.service';



@Component({
  selector: 'app-katalog',
  templateUrl: './katalog.component.html',
  styleUrls: ['./katalog.component.css'],
  providers: [KatalogDataService]
})
export class KatalogComponent implements OnInit {


  public _selectedType:Katalog = null;//выбор категории
  private _flag:boolean=false;
  private _katalogs:Katalog[]=null;

  //-------------------
  constructor(
    private repository: KatalogDataService
    ) { }

  ngOnInit(): void {
         this.repository.GetKatalogs().subscribe(data=>this._katalogs=data);
  }



/*
get products(): Product[]
 {
  return this.repository.getProducts(this._selectedCategory.id);
}
*/
get categories(): Katalog[]
{
return this._katalogs;
}

changeCategory(item?: Katalog)
 {
  this._selectedType = item;
 }
  //--------------------


}
//------------------------------


