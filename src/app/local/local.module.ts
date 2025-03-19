import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LocalPageRoutingModule } from './local-routing.module';

import { LocalPage } from './local.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LocalPageRoutingModule
  ]
})
export class LocalPageModule {}
