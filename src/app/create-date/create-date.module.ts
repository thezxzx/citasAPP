import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreateDatePageRoutingModule } from './create-date-routing.module';

import { CreateDatePage } from './create-date.page';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    IonicModule,
    CreateDatePageRoutingModule
  ],
  declarations: [CreateDatePage]
})
export class CreateDatePageModule {}
