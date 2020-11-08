import { Injectable } from "@angular/core";
import{ProductType,Product,NomenclatureType,Nomenclature,ShopingType} from "./data.model";
import { Observable,from } from "rxjs";



@Injectable()
export class StaticDataSource
 {

    private products: Product[] = [
      new Product(0,1,1,1,1,'Камод - "Дон Орех"',"Описание Камода стандарт",2500,0.20,
      [{"path":'assets/images/kamod/laminat/don-orex/',"name":'k-1.jpg'},
      {"path":'assets/images/kamod/laminat/vengi/',"name":'k-2.jpg'}]),
      new Product(1,1,2,1,1,'Камод -"Венги Цава"',"Описание Камода стандарт",2500,0.20,
      [{"path":'assets/images/kamod/laminat/vengi/',"name":'k-v.jpg'},
      {"path":'assets/images/kamod/laminat/vengi/',"name":'k-2.jpg'}]),
      new Product(2,1,3,1,1,'Камод -"Дуб Сонома"',"Описание Камода стандарт",2500,0.20,
      [{"path":'assets/images/kamod/laminat/sonoma/',"name":'k-1.jpg'},
      {"path":'assets/images/kamod/laminat/vengi/',"name":'k-2.jpg'}]),
      new Product(3,1,4,1,1,'Камод -"Венги-Молочный"',"Описание Камода стандарт",2500,0.20,
      [{"path":'assets/images/kamod/laminat/vengi/',"name":'k-1.jpg'},
      {"path":'assets/images/kamod/laminat/vengi/',"name":'k-2.jpg'}]),
      new Product(3,1,4,1,1,'Камод "Шымо Комби"',"Описание Камода стандарт",2500,0.20,
      [{"path":'assets/images/kamod/laminat/shimo/',"name":'k-1.jpg'},
      {"path":'assets/images/kamod/laminat/vengi/',"name":'k-2.jpg'}]),
      new Product(4,1,9,2,1,'Камод -"Дуб Беленый"',"Описание Камода MDF",3600,0.20),
      new Product(5,1,4,6,1,'Камод -"Пеленальный"',"Описание стандарт",3600,0.20)
       // new Product(1, "Камод",1, "Описание Камода стандарт", 100,null),
       // new Product(2, "Камод МДФ", 1, "Описание Камода МДФ", 100,null),
       // new Product(3, "Камод Пеленальный",1, "Описание Камода пеленального",100,null),

    ];

    private categorys:ProductType[]=[
      new ProductType(1,"Камод",null),
      new ProductType(2,"Кровать",null),
      new ProductType(3,"Шкаф",null),
      new ProductType(4,"Кухня",null),
      new ProductType(5,"Кухонный Уголок",null),
      new ProductType(6,"Стол Обеденный",null),
      new ProductType(7,"Стол Писменный",null),
      new ProductType(8,"Стол Журнальный"),
      new ProductType(9,"Стол Маникюрный"),
      new ProductType(10,"Стол Тумба",null),
      new ProductType(11,"Гномик",null),
      new ProductType(12,"Диван",null),
      new ProductType(13,"Диван Угловой",null),
      new ProductType(14,"Титаник",null)
    ]

    private shopingTypes:ShopingType[]=[
      new ShopingType(0,'All','Любой продукт'),
      new ShopingType(1,'Корпусная Мебель','Например шкаф ,тумбочка,камод,кровать'),
      new ShopingType(2,'Мягкая Мебель','Например диван,')
    ]
         // комплектующие
    private nomenclatureTypes:NomenclatureType[]=[
      new NomenclatureType(0,0,'All','Любой тип'),
      new NomenclatureType(1,1,'ЛДСП','Ламинат коллекция'),
      new NomenclatureType(2,1,'МДФ','МДФ коллекция'),
      new NomenclatureType(3,1,'Столешницы','Столешиницы коллекция'),
      new NomenclatureType(4,1,'Ручки','Ручки коллекиция '),
      new NomenclatureType(5,1,'Детская мебель','Коллекция детской мебели',null, true,[1]),
      new NomenclatureType(6,1,'Детская мебель','Коллекция детской мебели',null, true,[2])
    ]
        // Комплектующие -что входит в состав товара
    private nomenclatures:Nomenclature[]=[
      new Nomenclature(0,0,'Любой',null,null,null, false,null),
      new Nomenclature(1,1,'Дон орех',null,null,null, false,null),
      new Nomenclature(2,1,'Венги Цава',null,null,null, false,null),
      new Nomenclature(3,1,'Дуб Молочный',null,null,null, false,null),
      new Nomenclature(4,1,'Венги-Молочный',null,null,null, true,[2,3]),
      new Nomenclature(5,1,'Шимо Темный',null,null,null, false,null),
      new Nomenclature(6,1,'Шимо Светлый',null,null,null, false,null),
      new Nomenclature(7,1,'Шимо "Темно-Светлый"',null,null,null, true,[2,3]),
      new Nomenclature(8,1,'Дуб Сонома',null,null,null, false,null),
      new Nomenclature(9,2,'Дуб Беленый','RON-107',null,null, false,null),
      new Nomenclature(10,2,'Орех Тисненый','P2158-01',null,null, false,null),
      new Nomenclature(10,2,'Венги','MBP 1998-10',null,null, false,null)

    ]


    getProducts(): Observable<Product[]>
     {
        return from([this.products]);
    }
// тип  продукта ---камод стол шкаф двиван---
    getCategorys():Observable<ProductType[]>{
      return from([this.categorys]);
    }
//МягкаяМебель  КорпусМебель или другая карегрия магазина(идеи предстваления товара пользователю)
    getShopingTypes():Observable<ShopingType[]>{
      return from([this.shopingTypes]);
    }


  getNomenclatureTypes():Observable<NomenclatureType[]>{
    return from([this.nomenclatureTypes]);
  }

  getNomenclatures():Observable<Nomenclature[]>{

    return from([this.nomenclatures]);
  }


}

