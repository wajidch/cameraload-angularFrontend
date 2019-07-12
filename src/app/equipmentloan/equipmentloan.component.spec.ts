import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EquipmentloanComponent } from './equipmentloan.component';

describe('CameraloanComponent', () => {
  let component: EquipmentloanComponent;
  let fixture: ComponentFixture<EquipmentloanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EquipmentloanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EquipmentloanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
