import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomemeseroPageRoutingModule } from './homemesero-routing.module';

import { HomemeseroPage } from './homemesero.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomemeseroPageRoutingModule
  ],
  declarations: [HomemeseroPage]
})
export class HomemeseroPageModule {}
