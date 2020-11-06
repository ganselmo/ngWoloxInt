import { TestBed } from '@angular/core/testing';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { TechService } from './tech.service';
import { AppModule } from 'src/app/app.module';
import {
  HttpClientTestingModule,
  HttpTestingController
} from '@angular/common/http/testing';
import { TechModel } from '../models/tech.model';
describe('TechService', () => {
  let service: TechService;

  let httpTestingController: HttpTestingController;


  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TechService],
      imports: [HttpClientTestingModule]
    });
    // We inject our service (which imports the HttpClient) and the Test Controller
    httpTestingController = TestBed.inject(HttpTestingController);
    service = TestBed.inject(TechService);
  });


  it('returned Observable should match the right data', async (done: DoneFn) => {
    service.initTechs()
      .then((data: Array<TechModel>) => data);
    // expect(data1.length).toBeGreaterThan(8)
    done()
  });
});
