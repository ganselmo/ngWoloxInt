import { Component, OnInit } from '@angular/core';
import { Benefit } from '../../models/benefit.model';
import { BenefitsService } from '../../services/benefits.service';

@Component({
  selector: 'app-beneficios',
  templateUrl: './beneficios.component.html',
  styleUrls: ['./beneficios.component.scss']
})
export class BeneficiosComponent implements OnInit {

  benefits:Array<Benefit>;
  constructor(private benefitService:BenefitsService) { }


  ngOnInit(): void {

    this.benefits = this.benefitService.getBenefits()
  }


}
