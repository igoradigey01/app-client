import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {
  Image,
  ItemProduct,
  Product,
} from 'src/app/data-model/class-data.model';
import { ProductDetailsDataService } from '../../data-model/product-details-data.service';
//import { environment } from './../../../assets/images' ;

@Component({
  selector: 'app-product-details.',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
  providers: [ProductDetailsDataService],
})
//------------User view item-product
export class ProductDetailsComponent implements OnInit {
  _errorUotput: boolean = false;
  _error: any;

  _selectedItemProduct: ItemProduct = new ItemProduct(
    new Product(-1, '', 0, -1, -1, -1, '', null),
    [new Image(-1, 'not_found.png', -1)],
    null
  );

 // _images: Image[] = [new Image(-1, 'not_found.png', -1)];
  _currentImage: Image;
  _notFoundImage: Image = new Image(-1, 'not_found.png', -1);
  _currentIndex: number = 0;
  _flagCarouselHiden: boolean = false;
  _url_img = this._repository.GetUrlImg;



  constructor(
    private _repository: ProductDetailsDataService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    //---------------------14.05.21
    // this._flagCarouselHiden=true;
    //this._currentImage
    this.route.paramMap.subscribe((params) => {
      let i: number = Number.parseInt(params.get('productId'));
      this._repository
        .GetItemProducts(i)
        .subscribe((d) => {
          this._selectedItemProduct.product = d;
          this._selectedItemProduct.image[0].name=d.image; //задать первому элементу [] name фото parent-( product)
          this.GetImages(this._selectedItemProduct.product.id,this._selectedItemProduct);
          this._currentImage = this._selectedItemProduct.image[0];
        });
    });
    //------------------------
    //  this.GetImages(this._selectedItemProduct.product.id,this._selectedItemProduct);
    //  this._currentImage = this._selectedItemProduct.image[0];
    //--------------------------
  }
  Prev() {
    // console.log("Click Prev button");
    //  this._currentImage=this._images[1];
    --this._currentIndex;

    if (this._currentIndex >= 0) {
      this._currentImage = this._selectedItemProduct.image[this._currentIndex];
    } else {
      this._currentIndex = this._selectedItemProduct.image.length - 1;
      this._currentImage = this._selectedItemProduct.image[this._currentIndex];
    }
    // console.log("Click Prev button---index--"+this._currentIndex);
  }
  // carousel medod
  Next() {
    ++this._currentIndex;

    if (this._currentIndex < this._selectedItemProduct.image.length) {
      this._currentImage = this._selectedItemProduct.image[this._currentIndex];
    } else {
      this._currentIndex = 0;
      this._currentImage = this._selectedItemProduct.image[this._currentIndex];
    }
    // console.log("Click Next button---index--"+this._currentIndex);
  }
  // left katalog panel medod
  changeImg(i: number) {
    this._currentIndex = i;
    this._currentImage = this._selectedItemProduct.image[this._currentIndex];
    console.log('UpdateImgs()--_currentIndex--' + this._currentIndex);
  }
  // crarousel isVisible показать скрыть если нет Photo

  private GetImages(idProduct: number, item: ItemProduct) {
    this._repository.GetImages(idProduct).subscribe(
      (d) => {
        if (d.length > 0) {
          d.forEach((i: Image) => {
            item.image.push(i);
          });
          // item.image = d;
          //  if(d.length>0)
        }
      },
      (err) => {
        this._error = err.error;
        console.log(err);
        this._errorUotput = true;
      }
    );
  }
}
