import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HCardComponent } from './h-card.component';

describe('HCardComponent', () => {
  let component: HCardComponent;
  let fixture: ComponentFixture<HCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
