import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditaccessrightComponent } from './editaccessright.component';

describe('EditaccessrightComponent', () => {
  let component: EditaccessrightComponent;
  let fixture: ComponentFixture<EditaccessrightComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditaccessrightComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditaccessrightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
