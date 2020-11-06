import { HttpClient, HttpHandler } from '@angular/common/http';
import { TechService } from '../../services/tech.service';

import { TechLandingComponent } from './tech-landing.component';

describe('TechLandingComponent', () => {
  let component: TechLandingComponent;
  let service: TechService;
  let http: HttpClient;
  let httpc: HttpHandler;

  beforeEach(async () => {

    http = await new HttpClient(httpc)
    service = await new TechService(http);
    component = await new TechLandingComponent(service);


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

  it('Deben cambiar los filtros', async () => {

    component.techFilter.value ='100';
    expect(component.techFilter).toEqual({
      field: 'tech',
      value: '100'
    })

    expect(component.typeFilter).toEqual({
      field: 'type',
      value: ''
    })
  })
});
