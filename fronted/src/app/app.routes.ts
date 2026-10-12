import { Routes } from '@angular/router';
import { Login } from './pages/login/login';
import { MainLayout } from './shared/components/layouts/main-layout/main-layout';
import { HomePage } from './pages/home-page/home-page';

export const routes: Routes = [
  { path: 'login', component: Login },

  {
    path: '',
    component: MainLayout,
    children: [
      { path: '', component: HomePage },
    ]
  },

  { path: '**', redirectTo: '' }
];
