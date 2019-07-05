import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditcameradetailComponent } from './editcameradetail.component';

describe('EditcameradetailComponent', () => {
  let component: EditcameradetailComponent;
  let fixture: ComponentFixture<EditcameradetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditcameradetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditcameradetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
