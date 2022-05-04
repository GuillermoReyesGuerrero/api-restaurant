import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MesasadminPageRoutingModule } from './mesasadmin-routing.module';

import { MesasadminPage } from './mesasadmin.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MesasadminPageRoutingModule
  ],
  declarations: [MesasadminPage]
})
export class MesasadminPageModule {}
