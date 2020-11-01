import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingComponent } from './landing.component';
import { LandingRoutingModule } from './landing-routing.module';
import { InicioComponent } from './components/inicio/inicio.component';
import { WoloxersComponent } from './components/woloxers/woloxers.component';
import { BeneficiosComponent } from './components/beneficios/beneficios.component';
import { ThanksComponent } from './components/thanks/thanks.component';
import { CoreModule } from 'src/app/core/core.module';
import { BenefitComponent } from './components/beneficios/benefit/benefit.component';



@NgModule({
  declarations: [LandingComponent, InicioComponent, WoloxersComponent, BeneficiosComponent, ThanksComponent, BenefitComponent],
  imports: [
    CommonModule,
    LandingRoutingModule,
    CoreModule
  ]

})
export class LandingModule { }
