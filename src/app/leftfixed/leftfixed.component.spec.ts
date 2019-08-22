import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeftfixedComponent } from './leftfixed.component';

describe('LeftfixedComponent', () => {
  let component: LeftfixedComponent;
  let fixture: ComponentFixture<LeftfixedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeftfixedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeftfixedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
