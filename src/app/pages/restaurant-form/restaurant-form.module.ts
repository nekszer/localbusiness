import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RestaurantFormPageRoutingModule } from './restaurant-form-routing.module';
import { RestaurantFormPage } from './restaurant-form.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RestaurantFormPageRoutingModule
  ],
  declarations: [RestaurantFormPage]
})
export class RestaurantFormPageModule {}
