import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddnewequipmentComponent } from './addnewequipment.component';

describe('AddnewequipmentComponent', () => {
  let component: AddnewequipmentComponent;
  let fixture: ComponentFixture<AddnewequipmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddnewequipmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddnewequipmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
