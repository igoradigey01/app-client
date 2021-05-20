import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';

import { ProductDataService } from '../../data-model/product-data.servisce';
import { Katalog, Product } from '../../data-model/class-data.model';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  providers: [ProductDataService],
})
export class ProductComponent implements OnInit {
  _products: Product[] = null; //
 // _selectedProducts: Product[] = null;
  _url_img = this._repository.GetUrlImg();

  _katalogName:string='';
  _katalogs:Katalog[]=null;

  // public _buttonFlags:NomenclatureType[]=null;
  // public _flagVizyalButton:boolean=false;

  constructor(
    private _repository: ProductDataService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const categoryId: string = this.route.snapshot.paramMap.get('katalogId');

    const id: number = Number(categoryId) || 0;
 //   this._repository.GetKatalog(id).subscribe(d=>this._katalogName=d.name);
   // this._katalogName=this._repository.
    this.load(id);
    this._repository.GetKatalogs().subscribe(d=>{this._katalogName=d.find(k=>k.id===id).name;});
   // console.log("katalogs------"+ this._katalogs);
  }

  share(){
    window.alert('The product has been shared!');
  }

  // загрузить данные подКаталога по id
 private load(idKatalog: number) {
    this._repository.GetProducts(idKatalog).subscribe(
      (d) => {
        this._products = d;
      },
      (err) => {
        console.log(err);
      }
    ); //13.03.21
  }
  //--------------------
}
