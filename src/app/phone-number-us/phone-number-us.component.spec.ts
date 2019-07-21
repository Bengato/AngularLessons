import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhoneNumberUSComponent } from './phone-number-us.component';

describe('PhoneNumberUSComponent', () => {
  let component: PhoneNumberUSComponent;
  let fixture: ComponentFixture<PhoneNumberUSComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhoneNumberUSComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhoneNumberUSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
