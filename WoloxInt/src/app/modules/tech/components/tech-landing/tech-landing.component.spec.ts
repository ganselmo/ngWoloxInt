
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppModule } from 'src/app/app.module';
import { TechService } from '../../services/tech.service';
import { TechModule } from '../../tech.module';

import { TechLandingComponent } from './tech-landing.component';

describe('TechLandingComponent', () => {
  let component: TechLandingComponent;
  let fixture: ComponentFixture<TechLandingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TechLandingComponent],
      imports: [AppModule, TechModule
      ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TechLandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });


  it('Debe crear los filtros', async () => {


    expect(component.techFilter).toEqual({
      field: 'tech',
      value: ''
    })

    expect(component.typeFilter).toEqual({
      field: 'type',
      value: ''
    })
  })

  it('Deben cambiar los filtros', async (done: DoneFn) => {

    component.techFilter.value = 'node';
    expect(component.techFilter).toEqual({
      field: 'tech',
      value: 'node'
    })
    done()


  })



  // it('#getObservableValue should return value from observable',
  //   (done: DoneFn) => {
  //     fixture.autoDetectChanges()
  //     component.techs.subscribe(value => {
  //       expect(value.length).toBe(0);

  //     });
  //     done()
  //   });
});
