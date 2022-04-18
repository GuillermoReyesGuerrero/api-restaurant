import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomemeseroPage } from './homemesero.page';

const routes: Routes = [
  {
    path: '',
    component: HomemeseroPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomemeseroPageRoutingModule {}
