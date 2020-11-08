import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopingTypeComponent } from './shoping-type.component';

describe('ShopingTypeComponent', () => {
  let component: ShopingTypeComponent;
  let fixture: ComponentFixture<ShopingTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShopingTypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopingTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
