import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./login/login.page').then( m => m.LoginPage)
  },
  {
    path: 'student-classes',
    loadComponent: () => import('./student-classes/student-classes.page').then( m => m.StudentClassesPage)
  },
  {
    path: 'student-class',
    loadComponent: () => import('./student-class/student-class.page').then( m => m.StudentClassPage)
  },
  {
    path: 'forgot-password',
    loadComponent: () => import('./forgot-password/forgot-password.page').then( m => m.ForgotPasswordPage)
  },
  {
    path: 'qr-reader',
    loadComponent: () => import('./qr-reader/qr-reader.page').then( m => m.QrReaderPage)
  },



];
