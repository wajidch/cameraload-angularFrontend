import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditequipmentloanComponent } from './editequipmentloan.component';

describe('EditcameraloanComponent', () => {
  let component: EditequipmentloanComponent;
  let fixture: ComponentFixture<EditequipmentloanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditequipmentloanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditequipmentloanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
