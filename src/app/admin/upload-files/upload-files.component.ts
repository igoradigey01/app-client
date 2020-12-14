import { Component, OnInit,Output,Input,EventEmitter} from '@angular/core';


@Component({
  selector: 'app-upload-files',
  templateUrl: './upload-files.component.html',
  styleUrls: ['./upload-files.component.css']
})
export class UploadFilesComponent implements OnInit {

  _previewUrl:any = null;

 @Input() _selectFile:File=null;
 @Output() _onSelectFile=new EventEmitter<File>();

  constructor() { }

  ngOnInit(): void {
  }

  changeFale(event:any){
    const target =event.target as HTMLInputElement;
  const files = target.files;
 // console.log("fale name upload-file.component --------undefined");

    //   if (files[0] as  undefined)
   // return;
      // устраняет ошибку
      //core.js:6210 ERROR TypeError: Cannot read property '0' of undefined
    this._selectFile=files[0];
    this.preview();

    // console.log("fale name upload-file.component --"+ this._selectFile.name);
     this._onSelectFile.emit(this._selectFile);


  }

  preview() {
    // Show preview
    var mimeType = this._selectFile.type;
    if (mimeType.match(/image\/*/) == null) {
      return;
    }

    var reader = new FileReader();
    reader.readAsDataURL(this._selectFile);
    reader.onload = (_event) => {
      this._previewUrl = reader.result;
    }
}

}
