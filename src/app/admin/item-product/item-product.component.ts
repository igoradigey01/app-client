import { Component, OnInit } from '@angular/core';
import { empty, throwError } from 'rxjs';
import { Image, Katalog, Product } from 'src/app/data-model/class-data.model';
import { ItemProductDataService } from 'src/app/data-model/item-product-data.service';
import { ActivatedRoute } from '@angular/router';
import { stringify } from '@angular/compiler/src/util';

@Component({
  selector: 'app-item-product',
  templateUrl: './item-product.component.html',
  styleUrls: ['./item-product.component.css'],
})
export class ItemProductComponent implements OnInit {
  _flagDisplayAddImgButton: boolean = false;

  //-- begin katalog panel pole
  _flagPanel1: boolean = true;
  _flagPanel2: boolean = false;
  _flagKatalogHiden = false;

  _katalogs: Katalog[];
  _selectedKagalog: Katalog = new Katalog(-1, '');
  // --end katalog panel pole

  //---- product panel pole begin
  _selectedProduct: Product;
  _products: Product[] = [new Product(-1, '', 0, -1, -1, -1, '', null)];

  //-- product panel pole end

  //_selectedItemProduct: Product=new Product();
  //--------- begin Carousel pole ------
  _images: Image[] = [new Image(-1, '', -1)];
  _currentImage: Image;
  _notFoundImage: Image = new Image(-1, 'not_found.png', -1);
  _currentIndex: number = 0;
  _flagCarouselHiden: boolean = false;

  // --- end Carousel pole
  _errorUotput: boolean = false;
  _error: any;
  _imgInvalid: boolean = true;
  _flagViewMode: string = 'default'; // табличный режим

  //------  load img from file ---


  _previewUrl: any = null;
  _flagPhoto: boolean = false;
  _selectedImage: Image = new Image(-1, '', -1,);
  //-----------------------------
  _url_img = this._repository.GetUrlImg();

  constructor(
    private _repository: ItemProductDataService,
    private _activateRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this._repository.GetKatalogs().subscribe((d) => (this._katalogs = d));

    /* 25.04.20.21
    this._idProduct = parseInt(this._activateRoute.snapshot.params['id']);
    this._nameProduct=this._activateRoute.snapshot.params['name'];
    */
  }
  // carousel medod
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
  ViwePanel() {
    this._flagPanel1 = !this._flagPanel1;
    this._flagPanel2 = !this._flagPanel2;
    this._flagKatalogHiden = !this._flagKatalogHiden;
  }

  addImg() {
    if (this._flagViewMode === 'edit') {
      this._selectedImage.productId = this._selectedProduct.id;

    //  this._selectedImage.photo = this._imgBase64;
      this._errorUotput = true;

      if (this._selectedImage.imageBase64==''||this._selectedImage.imageBase64==null) {
        this._error = 'Фото невыбрано!!';
        return;
      }
    }
    this._repository.AddImage(this._selectedImage).subscribe(
      (data) => {
        this._error = '';
        this._errorUotput = false;
        this._flagPhoto = false;

        this.cancel(); //15.03.21
      },
      (err) => {
        this._error = err.error;
        console.log(err);
        this._errorUotput = true;
      }
    );
  }

  deleteImg() {
    throwError('not impliment exeption');
  }

  cancel() {
    this._flagViewMode = 'default';
    // this._products=null;//25.04.21
    //this._selectedProduct=null;//25.04.21

    this._images = null; //25.04.21
    this._currentImage = null;
    this._currentIndex = 0;
    this._selectedImage=null; //5.05.21


    //this._dataFile=null;   19.12.20       ------------&&&????
    this._flagPhoto = false;
    this._imgInvalid = true;
    // console.log("-currentImage is null--"+this._currentImage);
    this.IsVisible();
  }

  // колекция фото продукта []
  private GetImages(idProduct: number) {
    this._repository.GetImages(idProduct).subscribe((d) => {
      this._images = d;
      this._currentImage = d[0];
    });
  }

  changeKagalog(item?: Katalog) {
    this._selectedKagalog = item;
    // this._flagDisplayAddButton = true;
    // this._repository.GetModel(item.id).subscribe((d) => (this._models = d));
    this.GetProducts(item.id);
  }

  changeProduct(item?: Product) {
    this._selectedProduct = item;
    this.GetImages(item.id);
    this._flagViewMode = 'edit';
    this.IsVisible();
  }

  // Carousel metod
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


  // загрузить данные подКаталога по id
  GetProducts(idKatalog: number) {
    this._repository.GetProducts(idKatalog).subscribe(
      (d) => {
        this._products = d;
        this._error = '';
        this._errorUotput = false;
      },
      (err) => {
        this._error = err.error;
        console.log(err);
        this._errorUotput = true;
      }
    ); //13.03.21
  }

  // init in crop-upload-files.  -----  this.getImg.emit(this._cropImgPreview);
  onSetFilePhoto(event: string) {

     this._selectedImage.imageBase64=event;  //this._imgBase64 = event;
     this._selectedImage.name='temp.png';
     this._flagPhoto=true; // в дочернем component crop-upload-file blog convert to type~{image/png}
                                            //  png server только (.png)

    if (this._selectedImage.imageBase64.length>0) {

      this._errorUotput = false;
      this._imgInvalid = false;

    }

  }
  // Blog flile object-----

}
