import { Routes } from '@angular/router';
import { HomeComponent } from './features/home/home-component';
import { RestaurationComponent } from './features/restauration/restauration-component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'restauration',
    component: RestaurationComponent,
  },
  {
    path: '**',
    redirectTo: '',
  },
];
