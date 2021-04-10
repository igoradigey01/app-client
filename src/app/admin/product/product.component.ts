import { Component, OnInit } from '@angular/core';
import { from, throwError } from 'rxjs';
import { ProductDataService } from '../../data-model/product-data.servisce';
import { Katalog, Product, TypeProduct } from '../../data-model/class-data.model';
import {environment} from '../../../environments/environment'



@Component({
  selector: 'app-model',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  providers: [ProductDataService]
})
export class ProductComponent implements OnInit {
  _katalogs: Katalog[];
  _typeProducts:TypeProduct[];
  _error:any;
  _errorUotput:boolean=false; //09.04.21 (true)
  _imgInvalid:boolean=true;


  _models: Product[] = [new Product(-1, '', 0, -1, -1, -1,'', null)];
  _flagPanel1: boolean = true;
  _flagPanel2: boolean = false;
  _flagKatalogHiden = false;
  _flagViewMode: string = 'default';
  _flagDisplayAddButton: boolean = false;

  _selectedKagalog: Katalog = new Katalog(-1, '');
  _selectedTypeProduct:TypeProduct=new TypeProduct(-1,'',null);
  _selectedProduct: Product= new Product(-1, '', -1, -1,null, null, null);

  _dataFile: File = null;
  _previewUrl: any = null;
  _flagPhoto:boolean=false;

  _url_img=environment.imgHost;

  constructor(private _repository: ProductDataService) {}

  ngOnInit(): void {
    this._repository.GetKatalogs().subscribe((d) => (this._katalogs = d));
    this._repository.GetTypeProduct().subscribe((d)=>(this._typeProducts=d));
  }
  // ngClass flags
  ViwePanel() {
    this._flagPanel1 = !this._flagPanel1;
    this._flagPanel2 = !this._flagPanel2;
    this._flagKatalogHiden = !this._flagKatalogHiden;
  }

  changeKagalog(item?: Katalog) {
    this._selectedKagalog = item;
    this._flagDisplayAddButton = true;
   // this._repository.GetModel(item.id).subscribe((d) => (this._models = d));
   this.load(item.id);
  }

  changeTypeProduct(item?: TypeProduct){
    this._selectedProduct.idTypeProduct=item.id;
    this._selectedTypeProduct=item;
  }


  changeProduct(item?: Product) {
    this._selectedProduct = item;
    this._flagViewMode = 'edit';
  }

  addModel() {
    this._selectedProduct = new Product(-1, '', -1, null, null, null);

    this._flagViewMode = 'create';
  }
  saveModel() {
    this._selectedProduct.idKatalog = this._selectedKagalog.id;
    this._selectedProduct.photo = this._dataFile;
    this._errorUotput=true;
    if(this._selectedProduct.photo==null){
      this._error="Фото невыбрано!!";
      return;
    }
    this._repository.CreateProduct(this._selectedProduct).subscribe((data) => {
      this._error='';
      this._errorUotput=false;

      this.cancel();//15.03.21

    },(err)=>{this._error=err.error;console.log(err);this._errorUotput=true;}

    );
    // throwError("not impliment exeption");
   // this.reload(this._selectedKagalog.id);

   //this.cancel();//13.03.2021

  }

  deleteModel() {
    throwError('not impliment exeption');
  }
  cancel() {
    this._flagViewMode = 'default';
    this._previewUrl=null;
    //this._dataFile=null;   19.12.20       ------------&&&????
    this._flagPhoto=false;
    this._imgInvalid=true;

  //  this.changeKagalog(this._selectedKagalog);

  }

  // перезагрузить данные подКаталога по id
  load(idKatalog:number){
    this._repository.GetProducts(idKatalog).subscribe((d) => {this._models = d;this._error='';this._errorUotput=false;},
    (err)=>{this._error=err.error;console.log(err);this._errorUotput=true;}
    );//13.03.21

  }
  onSetFilePhoto(event: File) {
    this._dataFile = event;
    if(this._dataFile!=null){
      this._errorUotput=  false;
      this. _imgInvalid=false;
    //  console.log("test-photo_errorUotput------------")
    }
   this.preview();
    //  console.log("fale name molel.component"+this._dataFile.name+" --"+this._dataFile);
  }

  preview() {
    this._flagPhoto=true;
    // Show preview
    var mimeType = this._dataFile.type;
    if (mimeType.match(/image\/*/) == null) {
      return;
    }

    var reader = new FileReader();
    reader.readAsDataURL(this._dataFile);
    reader.onload = (_event) => {
      this._previewUrl = reader.result;
    };
  }
}