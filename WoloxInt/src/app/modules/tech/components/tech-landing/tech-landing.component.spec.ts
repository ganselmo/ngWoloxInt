import { HttpClient, HttpHandler } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TechService } from '../../services/tech.service';

import { TechLandingComponent } from './tech-landing.component';

describe('TechLandingComponent', () => {
  let component: TechLandingComponent;
  let service: TechService;
  let http :HttpClient;
  let httpc :HttpHandler;

  beforeEach(async () => {

    http = await new HttpClient(httpc)
    service = await new TechService(http);
    component = await new TechLandingComponent(service);


  });


  it('Debe traer Datos', async () => {

   component.techs.subscribe(
     (data)=>{
      expect(data.length).toEqual(9)
     }
   )
  })

});
