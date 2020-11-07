
import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { BehaviorSubject, of } from 'rxjs';

import { AppModule } from 'src/app/app.module';
import { TechModel } from '../../models/tech.model';
import { TechService } from '../../services/tech.service';
import { TechModule } from '../../tech.module';

import { TechLandingComponent } from './tech-landing.component';

describe('TechLandingComponent', () => {
  let component: TechLandingComponent;
  let fixture: ComponentFixture<TechLandingComponent>;
  let de: DebugElement;
  let service: TechService;
  let spy: jasmine.Spy
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TechLandingComponent],
      providers: [TechService],
      imports: [AppModule, TechModule]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TechLandingComponent);
    component = fixture.componentInstance;
    de = fixture.debugElement
    service = de.injector.get(TechService)
    spy = spyOn(service,'getTechs').and.returnValue(new BehaviorSubject<Array<TechModel>>(
      [{
        tech: 'Node',
        year: 1,
        author: 'Autor',
        license: 'MIT',
        language: 'JS',
        type: 'Back-end',
        logo: 'test',
        liked: true
      }]

    ));
    fixture.detectChanges();


  });

  it("Component is created", () => {
    expect(component).toBeTruthy();
  })

  it("Should have the h1 element", () => {
    expect(de.query(By.css('h1')).nativeElement.innerText).toBe('Lista de tecnologías')
  })
  it("Should be called once",()=>{
    expect(spy).toHaveBeenCalled();
    expect(spy.calls.all().length).toEqual(1);

  })
  let childElement;
  it("Should be create line",()=>
  {
    childElement = de.query(By.css('app-tech-line'))
    expect(childElement).toBeTruthy()
  })
  it('Child element contains `Node`',()=>
  {
    expect(childElement.nativeElement.innerText).toContain('Node');
  })

});
