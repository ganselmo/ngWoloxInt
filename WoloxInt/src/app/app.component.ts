import { Component, OnInit } from '@angular/core';

import { LocationService } from './shared/services/location.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(private locationService:LocationService)
  {

  }
  ngOnInit(): void {
    this.locationService.initCountries()
  }


}
