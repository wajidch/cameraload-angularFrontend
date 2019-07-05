import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddnewcameraComponent } from './addnewcamera.component';

describe('AddnewcameraComponent', () => {
  let component: AddnewcameraComponent;
  let fixture: ComponentFixture<AddnewcameraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddnewcameraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddnewcameraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
