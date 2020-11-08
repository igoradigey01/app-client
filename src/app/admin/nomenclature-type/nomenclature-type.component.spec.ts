import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NomenclatureTypeComponent } from './nomenclature-type.component';

describe('NomenclatureTypeComponent', () => {
  let component: NomenclatureTypeComponent;
  let fixture: ComponentFixture<NomenclatureTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NomenclatureTypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NomenclatureTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
