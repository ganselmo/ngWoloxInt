import { Component, OnDestroy, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Filter } from '../../models/filter.model';
import { TechModel } from '../../models/tech.model';
import { TechService } from '../../services/tech.service';

@Component({
  selector: 'app-tech-landing',
  templateUrl: './tech-landing.component.html',
  styleUrls: ['./tech-landing.component.scss']
})
export class TechLandingComponent implements OnInit,OnDestroy {


  techFilter:Filter = {
    field:'tech',
    value:''
  }
  typeFilter:Filter={
    field:'type',
    value:''
  }
  constructor(private techService: TechService) { }
  techs: BehaviorSubject<Array<TechModel>> = new BehaviorSubject<Array<TechModel>>([])

  ngOnInit(): void {
    this.techs = this.techService.getTechs()
  }

  ngOnDestroy()
  {
    this.techService.destroy();
  }

  filterData() :void{
    this.techService.filter([this.techFilter,this.typeFilter])
  }
  sortAsc(field:string) :void
  {
    this.techService.sortAsc(field)
  }

  sortDesc(field:string) :void
  {
    this.techService.sortDesc(field)
  }


}
