import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechLineComponent } from './tech-line.component';

describe('TechLineComponent', () => {
  let component: TechLineComponent;
  let fixture: ComponentFixture<TechLineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TechLineComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TechLineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });


});
