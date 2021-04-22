import { Component, OnInit } from '@angular/core';
import { from, throwError } from 'rxjs';
import { Product, ItemProduct } from 'src/app/data-model/class-data.model';
import { ItemProductDataService } from 'src/app/data-model/item-product-data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-item-product',
  templateUrl: './item-product.component.html',
  styleUrls: ['./item-product.component.css'],
  providers: [ItemProductDataService],
})
export class ItemProductComponent implements OnInit {
  _flagDisplayAddImgButton: boolean = false;
  //_selectedItemProduct: Product=new Product();
  _itemProducts: ItemProduct[]=[ new ItemProduct(-1,'')];
  _errorUotput: boolean = false;
  _error: any;
  _flagViewMode: string = 'default'; // табличный режим
  _idProduct: number = -1;
  _nameProduct:string='';

  constructor(
    private _repository: ItemProductDataService,
    private _activateRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this._idProduct = parseInt(this._activateRoute.snapshot.params['id']);
    this._nameProduct=this._activateRoute.snapshot.params['name'];
        console.log("id----"+this._idProduct +"--- name --"+this._nameProduct);
    if (this._idProduct != -1) {
      //  this._repository.
    //  this._selectedProduct.id = this._idProduct;

      this._repository.GetItemProducts(this._idProduct).subscribe((d) => {
        this._itemProducts = d;
      });

      console.log(this._itemProducts)
    }
  }

  addImg() {
    throwError('not impliment exeption');
  }

  GetImgs() {
    throwError('not impliment exeption');
  }

  UpdateImg(item: ItemProduct) {
    throwError('not impliment exeption');
  }

  cancel() {
    throwError('not impliment exeption');
  }
}
