import { Component, Input, OnInit } from '@angular/core';
import { Benefit } from '../../../models/benefit.model';

@Component({
  selector: 'wolox-benefit',
  templateUrl: './benefit.component.html',
  styleUrls: ['./benefit.component.scss']
})
export class BenefitComponent implements OnInit {

  @Input() benefit:Benefit
  constructor() { }

  ngOnInit(): void {
  }

}
