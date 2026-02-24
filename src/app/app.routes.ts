import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', loadComponent: () => import('./pages/home/home').then(m => m.Home) },
  { path: 'post/:id', loadComponent: () => import('./pages/post-detail/post-detail').then(m => m.PostDetail) },
  { path: 'about', loadComponent: () => import('./pages/about/about').then(m => m.About) },
  { path: '**', redirectTo: '' }
];
