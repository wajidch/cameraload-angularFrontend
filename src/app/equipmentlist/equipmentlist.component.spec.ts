import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EquipmentlistComponent } from './equipmentlist.component';

describe('CameralistComponent', () => {
  let component: EquipmentlistComponent;
  let fixture: ComponentFixture<EquipmentlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EquipmentlistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EquipmentlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
