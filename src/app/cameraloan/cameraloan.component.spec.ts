import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CameraloanComponent } from './cameraloan.component';

describe('CameraloanComponent', () => {
  let component: CameraloanComponent;
  let fixture: ComponentFixture<CameraloanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CameraloanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CameraloanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
