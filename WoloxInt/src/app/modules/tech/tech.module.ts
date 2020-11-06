import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TechLandingComponent } from './components/tech-landing/tech-landing.component';
import { TechModuleRouting } from './tech-routing.module';
import { CoreModule } from 'src/app/core/core.module';
import { TechLineComponent } from './components/tech-line/tech-line.component';

import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [TechLandingComponent, TechLineComponent],
  imports: [
    CommonModule,
    TechModuleRouting,
    CoreModule,
    FormsModule
  ]
})
export class TechModule { }
