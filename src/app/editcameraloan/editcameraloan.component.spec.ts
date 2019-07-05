import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditcameraloanComponent } from './editcameraloan.component';

describe('EditcameraloanComponent', () => {
  let component: EditcameraloanComponent;
  let fixture: ComponentFixture<EditcameraloanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditcameraloanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditcameraloanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
