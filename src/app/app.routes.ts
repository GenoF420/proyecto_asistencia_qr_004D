import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'tabs',
    loadChildren: () => import('./tabs/tabs.routes').then((m) => m.routes),
  },
  {
    path: '',
    loadComponent: () => import('./login/login.page').then( m => m.LoginPage)
  },
  {
    path: 'student-classes',
    loadComponent: () => import('./student-classes/student-classes.page').then( m => m.StudentClassesPage)
  },  {
    path: 'student-class',
    loadComponent: () => import('./student-class/student-class.page').then( m => m.StudentClassPage)
  },



];
