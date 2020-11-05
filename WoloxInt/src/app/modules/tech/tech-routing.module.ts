import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TechLandingComponent } from './tech-landing/tech-landing.component';


const routes: Routes = [
  {
    path: '',
    component: TechLandingComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TechModuleRouting { }
