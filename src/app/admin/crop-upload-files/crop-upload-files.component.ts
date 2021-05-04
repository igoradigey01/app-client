import { Component, OnInit ,ViewChild} from '@angular/core';
import {ImageCroppedEvent} from 'ngx-image-cropper';


@Component({
  selector: 'app-crop-upload-files',
  templateUrl: './crop-upload-files.component.html',
  styleUrls: ['./crop-upload-files.component.css']

})
export class CropUploadFilesComponent implements OnInit {
  //----------- begin ngx-image-cropper----
  imgChangeEvt: any = '';
  cropImgPreview: any = '';
  //----- end ngx-image-cropper

  constructor() {}

  ngOnInit(): void {}
//------------------- begin ngx-image-cropper------
changeFale(event: any): void {
    this.imgChangeEvt = event;
}
cropImg(e: ImageCroppedEvent) {
    this.cropImgPreview = e.base64;
}

imgLoad() {
    // display cropper tool
}

initCropper() {
    // init cropper
}

imgFailed() {
    // error msg
}
//-- ---  end  ngx-image-cropper----

changeImg(){

}

cancel(){

}


}
