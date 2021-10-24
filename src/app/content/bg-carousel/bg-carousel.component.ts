import { Component, OnInit } from '@angular/core';
import {Observable,of, Observer, from ,interval, Subscription} from 'rxjs';


@Component({
  selector: 'app-bg-carousel',
  templateUrl: './bg-carousel.component.html',
  styleUrls: ['./bg-carousel.component.css']
})

export class BgCarouselComponent implements OnInit {

             _bgImagePath:string='../../assets/images/bg_img/';//path к папки background-image:url

             _listImg:string[]=['bg-1.jpg','bg-2.jpg','bg-3.jpg','bg-4.jpg','bg-5.jpg'];
             _i:number=0;
             _imgScr:string|null=null;

             _imgScrStatic:string=this._bgImagePath+'menuDropBG.png';

             _carouselIndicatorPath:string='/../../assets/icon/';
             _carouselDataSlideImg:string='circle-wite.svg';
             _carouselIndicatorImg:string='circle.svg';
             _srcImg1:string|null=null;
             _srcImg2:string|null=null;
             _srcImg3:string|null=null;
             _srcImg4:string|null=null;
             _srcImg5:string|null=null;
             _bgFlag:boolean=false;

             _bgImageChouseTamer: Subscription|null =null;





  constructor() {
   // this.bgImagePath();

  }

  ngOnInit(): void {
    this._srcImg1=this._carouselIndicatorPath+this._carouselDataSlideImg;
    this._srcImg2=this._carouselIndicatorPath+this._carouselDataSlideImg;
    this._srcImg3=this._carouselIndicatorPath+this._carouselDataSlideImg;
    this._srcImg4=this._carouselIndicatorPath+this._carouselDataSlideImg;
    this._srcImg5=this._carouselIndicatorPath+this._carouselDataSlideImg;
    this._i=0;

    this.bgImagePath();



  //this._bgImageChouseTamer =interval(20000);

    //this._bgImageChouseTamer.subscribe( ()=> this.bgImagePath());

    //---------------------------------
         let obj:Observable<string>    = new Observable(observer => {
       const interval = setInterval(() => observer.next(this.bgImagePath()), 30000);
       return () => clearInterval(interval);
       });

       //const

      this._bgImageChouseTamer  =  obj.subscribe() as Subscription;


  }


  /*--x_01 карусель  background-image:url   из _listImg --*/

   bgImagePath():string {

  //  console.log("Test bgImgePath()")
   //let j:number=0;j<this._list.length;j++
   this._i++;
   if(this._i<this._listImg.length){

    this._imgScr=this._bgImagePath+this._listImg[this._i];

   }
   else{
     this._i=0;
     this._imgScr=this._bgImagePath+this._listImg[this._i];
   }

   switch(this._i) {
    case 0: {
      this._srcImg1=this._carouselIndicatorPath+this._carouselIndicatorImg;
    this._srcImg2=this._carouselIndicatorPath+this._carouselDataSlideImg;
    this._srcImg5=this._carouselIndicatorPath+this._carouselDataSlideImg;
       break;
    }
    case 1: {
      this._srcImg2=this._carouselIndicatorPath+this._carouselIndicatorImg;
    this._srcImg1=this._carouselIndicatorPath+this._carouselDataSlideImg;
    this._srcImg3=this._carouselIndicatorPath+this._carouselDataSlideImg;
       break;
    }
    case 2: {
      this._srcImg3=this._carouselIndicatorPath+this._carouselIndicatorImg;
    this._srcImg2=this._carouselIndicatorPath+this._carouselDataSlideImg;
    this._srcImg4=this._carouselIndicatorPath+this._carouselDataSlideImg;
      break;
   }
   case 3: {
    this._srcImg4=this._carouselIndicatorPath+this._carouselIndicatorImg;
    this._srcImg5=this._carouselIndicatorPath+this._carouselDataSlideImg;
    this._srcImg3=this._carouselIndicatorPath+this._carouselDataSlideImg;
    break;
 }
 case 4: {
  this._srcImg5=this._carouselIndicatorPath+this._carouselIndicatorImg;
    this._srcImg4=this._carouselIndicatorPath+this._carouselDataSlideImg;
    this._srcImg1=this._carouselIndicatorPath+this._carouselDataSlideImg;
   // console.log(this._imgScr);
  break;
}
    default: {
      this._srcImg1=this._carouselIndicatorPath+this._carouselIndicatorImg;
      this._srcImg2=this._carouselIndicatorPath+this._carouselDataSlideImg;
      this._srcImg5=this._carouselIndicatorPath+this._carouselDataSlideImg;
       break;
    }
 }

    //console.log(this._imgScr);
    return this._imgScr;

  }

  onchengFlag():void{

    if(this._bgFlag==false)
    {
      this._bgFlag=true;
      if(this._bgImageChouseTamer)
    this._bgImageChouseTamer.unsubscribe();



    }
    this._imgScr=this._imgScrStatic;

  //  throw new Error("---Metod не задан --onchengFlag()--body-shop.component.ts");

  }

   onnext():void{

    //throw new Error("---Metod не задан--body-shop.component.ts");


    this.bgImagePath();


  }
  /*metod вызова коментарий тест*/
 public onback(){
    if(this._i==0){
      this._i=5;
    }
    this._i--;
    this._i--;
    this.bgImagePath();
  }
  //сборщик мусора
  ngOnDestroy() {
    if(this._bgImageChouseTamer)
    this._bgImageChouseTamer.unsubscribe();
  // console.log("--test ngOnDestroy unsebscrable()--")
  }


}
