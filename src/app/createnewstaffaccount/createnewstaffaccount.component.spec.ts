import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatenewstaffaccountComponent } from './createnewstaffaccount.component';

describe('CreatenewstaffaccountComponent', () => {
  let component: CreatenewstaffaccountComponent;
  let fixture: ComponentFixture<CreatenewstaffaccountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatenewstaffaccountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatenewstaffaccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
