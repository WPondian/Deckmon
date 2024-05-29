import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';

export const APP_ROUTES: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    loadChildren: () => import('./components/player/player.routes').then(r => r.PLAYER_ROUTES)
  },
];
