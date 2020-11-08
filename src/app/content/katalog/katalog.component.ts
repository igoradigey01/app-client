import { Component, OnInit } from '@angular/core';

import { ProductType} from "../../model/data.model";
import {DataService} from '../data.service';



@Component({
  selector: 'app-katalog',
  templateUrl: './katalog.component.html',
  styleUrls: ['./katalog.component.css'],
  providers: [DataService]
})
export class KatalogComponent implements OnInit {


  public _selectedType:ProductType = null;//выбор категории
  private _flag:boolean=false;
  private _katalog:ProductType[]=null;

  //-------------------
  constructor(
    private repository: DataService
    ) { }

  ngOnInit(): void {
         this.repository.GetProductType().subscribe(data=>this._katalog=data);
  }



/*
get products(): Product[]
 {
  return this.repository.getProducts(this._selectedCategory.id);
}
*/
get categories(): ProductType[]
{
return this._katalog;
}

changeCategory(item?: ProductType)
 {
  this._selectedType = item;
 }
  //--------------------


}
//------------------------------


