import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TregisterFormComponent } from './tregister-form.component';

describe('TregisterFormComponent', () => {
  let component: TregisterFormComponent;
  let fixture: ComponentFixture<TregisterFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TregisterFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TregisterFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
