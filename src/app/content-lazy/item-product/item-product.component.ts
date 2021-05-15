import { Component, OnInit } from '@angular/core';
import { Image } from 'src/app/data-model/class-data.model';
//import { environment } from './../../../assets/images' ;

@Component({
  selector: 'app-item-product',
  templateUrl: './item-product.component.html',
  styleUrls: ['./item-product.component.css']
})
//------------User view item-product
export class ItemProductComponent implements OnInit {
  _images: Image[] = [new Image(-1, 'not_found.png', -1)];
  _currentImage: Image;
  _notFoundImage: Image = new Image(-1, 'not_found.png', -1);
  _currentIndex: number = 0;
  _flagCarouselHiden: boolean = false;
  _url_img = this.GetUrlImg();

  GetUrlImg():string{
    return 'https://s.x-01.ru/images/not_found.png';
  }

  constructor() { }

  ngOnInit(): void {
    //---------------------14.05.21
    this._flagCarouselHiden=true;
    //this._currentImage
  }
  Prev() {
    // console.log("Click Prev button");
    //  this._currentImage=this._images[1];
    --this._currentIndex;

    if (this._currentIndex >= 0) {
      this._currentImage = this._images[this._currentIndex];
    } else {
      this._currentIndex = this._images.length - 1;
      this._currentImage = this._images[this._currentIndex];
    }
    // console.log("Click Prev button---index--"+this._currentIndex);
  }
  // carousel medod
  Next() {
    ++this._currentIndex;

    if (this._currentIndex < this._images.length) {
      this._currentImage = this._images[this._currentIndex];
    } else {
      this._currentIndex = 0;
      this._currentImage = this._images[this._currentIndex];
    }
    // console.log("Click Next button---index--"+this._currentIndex);
  }
  // left katalog panel medod
  changeImg(i: number) {
    this._currentIndex = i;
    this._currentImage = this._images[this._currentIndex];
    console.log('UpdateImgs()--_currentIndex--' + this._currentIndex);
  }
  // crarousel isVisible показать скрыть если нет Photo
  IsVisible() {
    if (
      this._currentImage == null ||
      this._currentImage.id == this._notFoundImage.id
    ) {
      console.log('IsVisible()-- currentImage==null');
      this._currentImage = this._notFoundImage;

      this._flagCarouselHiden = true;
    } else this._flagCarouselHiden = false;
  }


}
