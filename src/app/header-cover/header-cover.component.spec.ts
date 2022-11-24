import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderCoverComponent } from './header-cover.component';

describe('HeaderCoverComponent', () => {
  let component: HeaderCoverComponent;
  let fixture: ComponentFixture<HeaderCoverComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderCoverComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderCoverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
