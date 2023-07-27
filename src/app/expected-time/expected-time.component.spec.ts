import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpectedTimeComponent } from './expected-time.component';

describe('ExpectedTimeComponent', () => {
  let component: ExpectedTimeComponent;
  let fixture: ComponentFixture<ExpectedTimeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExpectedTimeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExpectedTimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
