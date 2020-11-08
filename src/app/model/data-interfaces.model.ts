export interface IProduct {
  id: number;
  categoryId: number;//---камод стол шкаф двиван---
  nomenclatureId:number;
  nomenclatureTypeId:number;//--ламинат,МДФ,Столешница
  productTypeId:number;//МягкаяМебель  КорпусМебель
  name: string;
  description?: string;
  price?: number;
  priceK?:number;
  imgFiles?:IFile[];

}



export interface IFile{
  name?:string;
  path:string;
}
//export enum TypeProductView {Laminate,MDF,Tabletop}//ламинат,МДФ,Столешница


//---камод стол шкаф двиван---

export interface ICategory {
  id:number;
  name:string;
  description?: string,
  file?:IFile[]

 // productArrayId:number[];
}

export interface IUser {
  id?:number;
  name?: string;
  password?: string;
  email?: string;
  phone?: string;
  address?: string;
  auth?:string;
}

