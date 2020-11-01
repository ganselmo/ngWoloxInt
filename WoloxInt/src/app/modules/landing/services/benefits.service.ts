import { Injectable } from '@angular/core';
import { Benefit } from '../models/benefit.model';

@Injectable({
  providedIn: 'root'
})
export class BenefitsService {

  benefits:Array<Benefit> = [

    {
      iconUrl:'assets/Ic_Hour.svg',
      span:'Flexibilidad Horaria'
    },
    {
      iconUrl:'assets/Ic_HomeOffice.svg',
      span:'Home Office'
    },
    {
      iconUrl:'assets/Ic_Workshops.svg',
      span:'Capacitaciones y workshops'
    },
    {
      iconUrl:'assets/Ic_DrinkSnacks.svg',
      span:'Snacks, frutas\n y bebidas gratis'
    },
    {
      iconUrl:'assets/Ic_laptop.svg',
      span:'Semana Remota'
    },
    {
      iconUrl:'assets/Ic_brain.svg',
      span:'Trabajar\n en ultimas tecnologias'
    }
  ];
  constructor() { }
  getBenefits(): Array<Benefit>
  {
    return this.benefits;
  }
}
