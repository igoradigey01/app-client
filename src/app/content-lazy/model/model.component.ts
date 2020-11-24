import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';

import { Katalog,Product} from "../../data-model/class-data.model";



@Component({
  selector: 'app-product',
  templateUrl: './model.component.html',
  styleUrls: ['./model.component.css'],
  providers: []
})
export class ModelComponent implements OnInit {
 // private _flagSorts:NomenclatureType[]=null;// nomenclatureTypeId -сортировка по

  private _products:Product[]=null;// Poducts соотвествующий выбранной категории -камод,диван,шкаф...
 //----------------- Свойства public (open in viwe)-----
 //public _selectedCategory:ProductType = null; // private 31.05.20- public
  public _selectedProducts:Product[]=null;
  /*Propertys выбранные Свойства -
                                            массив-колекция из массива Poducts выбранная пользователем */

   // public _buttonFlags:NomenclatureType[]=null;
    public _flagVizyalButton:boolean=false;

  constructor(
   // private repository: CategoryRepository,
  // private repositoryProduct:ProductRepository,
  //  private repositoryNomenclatureType:NomenclatureTypeRepository,
    private route: ActivatedRoute
  ) {

  }

  ngOnInit(): void {
    const categoryId:string = this.route.snapshot.paramMap.get('katalogId') ;

      const id:number=Number(categoryId) || 0;
      /*
   this._selectedCategory= this.repository.getCategory(id);
   this._products=this.repositoryProduct.getProducts(this._selectedCategory.id);
   this._selectedProducts=this._products;
   this._buttonFlags=this.getFlags();
   if(this._buttonFlags.length>1){
     this._flagVizyalButton=true;

   } */

  }
// определить  к каким типам Номенклатуры(NomenclatureType) относится выбраный массив products
// для дальнейшей сорировки в форме с помещю кнопок (например мдф ламинат)



   getProducts():Product[]{
          //  throw Error('Метод не определен-getFlag()');
          return this._selectedProducts;
     }

changeCategory(category?: Katalog){
  throw Error('Метод не определен-getFlag()');
  //this._selectedCategory = category;
 }
  //--------------------
}

