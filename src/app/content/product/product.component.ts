import { Component, OnInit } from '@angular/core';
import { ProductRepository } from '../../model/product.repository';
import { ActivatedRoute } from '@angular/router';

import { ProductType, Product,NomenclatureType} from "../../model/data.model";

import { StaticDataSource} from "../../model/static.datasource";
import { CategoryRepository } from 'src/app/model/category.repository';
import { NomenclatureTypeRepository } from 'src/app/model/nomenclatureType.repository';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  providers: [CategoryRepository,ProductRepository,NomenclatureTypeRepository, StaticDataSource]
})
export class ProductComponent implements OnInit {
  private _flagSorts:NomenclatureType[]=null;// nomenclatureTypeId -сортировка по

   private _products:Product[]=null;// Poducts соотвествующий выбранной категории -камод,диван,шкаф...
 //----------------- Свойства public (open in viwe)-----
 public _selectedCategory:ProductType = null; // private 31.05.20- public
   public _selectedProducts:Product[]=null; /*Propertys выбранные Свойства -
                                            массив-колекция из массива Poducts выбранная пользователем */

    public _buttonFlags:NomenclatureType[]=null;
    public _flagVizyalButton:boolean=false;

  constructor(
    private repository: CategoryRepository,
    private repositoryProduct:ProductRepository,
    private repositoryNomenclatureType:NomenclatureTypeRepository,
    private route: ActivatedRoute
  ) {

  }

  ngOnInit(): void {
    const categoryId:string = this.route.snapshot.paramMap.get('katalogId') ;

      const id:number=Number(categoryId) || 0;
   this._selectedCategory= this.repository.getCategory(id);
   this._products=this.repositoryProduct.getProducts(this._selectedCategory.id);
   this._selectedProducts=this._products;
   this._buttonFlags=this.getFlags();
   if(this._buttonFlags.length>1){
     this._flagVizyalButton=true;
   }

  }
// определить  к каким типам Номенклатуры(NomenclatureType) относится выбраный массив products
// для дальнейшей сорировки в форме с помещю кнопок (например мдф ламинат)
   getFlags():NomenclatureType[]{

    let  nomenclatureTypeIds:number[]=null;
    let nomenclatureTypes:NomenclatureType[]=null;
    //let arrId:number[]=null;
     for(let i in this._products){
      // arrId.push(this._products[i].nomenclatureTypeId);
       if(nomenclatureTypeIds==null){
         nomenclatureTypeIds=[];
         nomenclatureTypeIds.push(this._products[i].nomenclatureTypeId);
        //nomenclatureTypeIds[0]=this._products[i].nomenclatureTypeId;
       }
       else{
         let objId:number=this._products[i].nomenclatureTypeId;
         if(nomenclatureTypeIds.includes(objId)){}
         else{
           nomenclatureTypeIds.push(objId);
             }
           }

      }
      for(let i in nomenclatureTypeIds){
        let id:number=nomenclatureTypeIds[i];
        if(nomenclatureTypes==null){

        nomenclatureTypes=[];
        nomenclatureTypes.push(this.repositoryNomenclatureType.getNomenclatureType(id));
        }
        else{
          nomenclatureTypes.push(this.repositoryNomenclatureType.getNomenclatureType(id));

        }

       }


   // throw Error('Метод не определен-getFlag()');
   return nomenclatureTypes;
   }


   getProducts(): Product[]{
            // throw Error('Метод не определен-getFlag()');
          return this._selectedProducts;
     }

changeCategory(category?: ProductType){
  throw Error('Метод не определен-getFlag()');
  //this._selectedCategory = category;
 }
  //--------------------
}

