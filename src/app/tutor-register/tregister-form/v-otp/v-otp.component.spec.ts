import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VOtpComponent } from './v-otp.component';

describe('VOtpComponent', () => {
  let component: VOtpComponent;
  let fixture: ComponentFixture<VOtpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VOtpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VOtpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
