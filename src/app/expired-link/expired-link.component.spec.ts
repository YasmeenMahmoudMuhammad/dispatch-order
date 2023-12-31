import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpiredLinkComponent } from './expired-link.component';

describe('ExpiredLinkComponent', () => {
  let component: ExpiredLinkComponent;
  let fixture: ComponentFixture<ExpiredLinkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExpiredLinkComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExpiredLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
