import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClassPage } from './class.page';

const routes: Routes = [
  {
    path: '',
    component: ClassPage
  },
  {
    path: 'qr',
    loadChildren: () => import('./qr/qr.module').then( m => m.QrPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClassPageRoutingModule {}
