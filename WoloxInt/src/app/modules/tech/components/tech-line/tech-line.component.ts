import { Component, Input, OnInit } from '@angular/core';
import { TechModel } from '../../models/tech.model';
import { TechService } from '../../services/tech.service';

@Component({
  selector: 'app-tech-line',
  templateUrl: './tech-line.component.html',
  styleUrls: ['./tech-line.component.scss']
})
export class TechLineComponent implements OnInit {

  @Input('data') tech:TechModel;
  constructor(
    private techService:TechService
  ) { }

  ngOnInit(): void {

  }

  like()
  {
    this.tech.liked=true;
    this.techService.saveLike(this.tech.tech);
  }
  unlike()
  {

    this.tech.liked=false;
    this.techService.deleteLike(this.tech.tech);
  }
}
