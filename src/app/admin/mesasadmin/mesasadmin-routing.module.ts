import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MesasadminPage } from './mesasadmin.page';

const routes: Routes = [
  {
    path: '',
    component: MesasadminPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MesasadminPageRoutingModule {}
