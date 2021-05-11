import { Component, OnInit ,Input,Output,EventEmitter} from '@angular/core';
import {ImageCroppedEvent} from 'ngx-image-cropper';


@Component({
  selector: 'app-crop-upload-files',
  templateUrl: './crop-upload-files.component.html',
  styleUrls: ['./crop-upload-files.component.css']

})
export class CropUploadFilesComponent implements OnInit {

  //@Input() _selectFile:File=null;
  @Output() getImg=new EventEmitter<string>();
  //----------- begin ngx-image-cropper----
  _imgChangeEvt: any = '';
  _cropImgPreview: any = '';
  //----- end ngx-image-cropper
  _flagViewCropUploadImg:boolean=false;


  constructor() {}

  ngOnInit(): void {}
//------------------- begin ngx-image-cropper------
changeFale(event: any): void {
    this._imgChangeEvt = event;
}
cropImg(e: ImageCroppedEvent) {
    this._cropImgPreview = e.base64;

}

imgLoad() {
    // display cropper tool
    this._flagViewCropUploadImg=true;
}

initCropper() {
    // init cropper
}

imgFailed() {
    // error msg
}
//-- ---  end  ngx-image-cropper----

changeImg(){
  //console.log("chaneImg crop-upload ---"+this._cropImgPreview);
  this.getImg.emit(this._cropImgPreview);
  this._flagViewCropUploadImg=false;

}
cancel(){

  this._flagViewCropUploadImg=false;



}


}
