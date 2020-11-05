import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TechLandingComponent } from './tech-landing/tech-landing.component';
import { TechModuleRouting } from './tech-routing.module';


@NgModule({
  declarations: [TechLandingComponent],
  imports: [
    CommonModule,
    TechModuleRouting
  ]
})
export class TechModule { }
