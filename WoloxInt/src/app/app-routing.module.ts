import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './core/guards/auth.guard';
import { NoGuard } from './core/guards/no-guard.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'technologies',
    pathMatch: 'full'
  },
  {

    path: 'technologies',
    loadChildren: () => import('./modules/tech/tech.module').then(m => m.TechModule),
    canActivate: [AuthGuard]
  },
  {

    path: 'landing',
    loadChildren: () => import('./modules/landing/landing.module').then(m => m.LandingModule),
    canActivate: [NoGuard]
  },
  {
    path: '**',
    redirectTo: 'technologies',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
