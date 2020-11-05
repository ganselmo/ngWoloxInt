import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechLandingComponent } from './tech-landing.component';

describe('TechLandingComponent', () => {
  let component: TechLandingComponent;
  let fixture: ComponentFixture<TechLandingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TechLandingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TechLandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
