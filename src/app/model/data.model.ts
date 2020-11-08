import {IProduct,IFile,ICategory, IUser} from './data-interfaces.model';

// конечное представление  продукта Камод-лдсп Камод-мдф Кровать-2000*1400
export class Product implements IProduct {

    constructor(
        public id: number,
        public categoryId:number, // категория продукта ---камод стол шкаф двиван---
        public nomenclatureId:number,//конечное название матерьяла -- дон орех,венги,солешкаМрамор,кожЗам коричневый,рагожка серая
        public nomenclatureTypeId:number,// категория матерьяла -- mdf ткань столешка ламинат
        public productTypeId:number,//МягкаяМебель  КорпусМебель или другая карегрия сайта(идеи предстваления товара пользователю)
        public name: string, //конечное название продукта
        public description?: string,
        public price?: number,
        public priceK?:number,
        public imgFiles?:IFile[],


        ) { }
}

// категория продукта ---камод стол шкаф двиван---
export class ProductType implements ICategory{

  constructor(public id:number,
              public name:string,
              public description?: string,
              public file?:IFile[]

              ){}
}
// -- дон орех,венги,солешкаМрамор,кожЗам коричневый,рагожка серая
export class Nomenclature implements ICategory{

  constructor(
           public id:number,
           public NomenclatureTypeId:number,
           public name:string,
           public alias?:string,
           public description?: string,
           public file?:IFile[],
           public combined?:boolean,
           public combinedID?:number[]
            ){}
}

// mdf ткани столешницы ламинат
export class NomenclatureType implements ICategory{

  constructor (
    public id:number,
    public ShopingTypeId:number,//МягкаяМебель  КорпусМебель
    public name:string,
    public description?: string,
    public file?:IFile[],
    public combined?:boolean,
    public combinedID?:number[]
  ){}
}

//МягкаяМебель  КорпусМебель или другая карегрия сайта(идеи предстваления товара пользователю)
 export class ShopingType implements ICategory{
   constructor(
    public id:number,
    public name:string,
    public description?: string,
    public file?:IFile[]
   ){}
 }

 // Аунтефикация Auth------------------------

 export class User implements IUser {
  constructor(
 //public id?:number,
 public name?: string,
 public password?: string,
 public email?: string,
 public phone?: string,
 public address?: string
 //public role?:string
 ){}
}
