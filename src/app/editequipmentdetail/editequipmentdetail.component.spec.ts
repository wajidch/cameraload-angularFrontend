import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditequipmentdetailComponent } from './editequipmentdetail.component';

describe('EditcameradetailComponent', () => {
  let component: EditequipmentdetailComponent;
  let fixture: ComponentFixture<EditequipmentdetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditequipmentdetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditequipmentdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
