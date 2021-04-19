
// категория продукта ---камод стол шкаф двиван---
export class Katalog {
  constructor(public id: number, public name: string) {}
}

// тип продукта--- мдф ЛДСП--
export class TypeProduct {
  constructor(
    public id: number,
    public name: string,
    public description: string
  ) {}
}
// конечное представление  продукта Камод-лдсп-венги Камод-мдф-венги Кровать-2000*1400-дубСанома
export class Product {
  constructor(
    public id: number,
    public name: string,
    public katalogId: number,
    public typeProductId: number,
    public price?: number,
    public markup?: number, //Торговая наценка
    public description?: string,
    public photo?: File,
    public image?: string
  ) {}
}

export class ItemProduct{

  constructor (
    public id:number,
    public name:string
  ){}

}

// -- дон орех,венги,солешкаМрамор,кожЗам коричневый,рагожка серая
export class Nomenclature {
  constructor(
    public id: number,
    public NomenclatureTypeId: number,
    public name: string,
    public alias?: string,
    public description?: string,
    public file?: string,
    public combined?: boolean,
    public combinedID?: number[]
  ) {}
}





// Аунтефикация Auth------------------------

export class User {
  constructor(
    //public id?:number,
    public name?: string,
    public password?: string,
    public email?: string,
    public phone?: string,
    public address?: string
  ) //public role?:string
  {}
}

//МягкаяМебель  КорпусМебель или другая карегрия сайта(идеи предстваления товара пользователю)
