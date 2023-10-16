import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MuestrasRoutingModule } from './muestras-routing.module';
import { MuestraComponent } from './pages/muestra/muestra.component';


@NgModule({
  declarations: [
    MuestraComponent
  ],
  imports: [
    CommonModule,
    MuestrasRoutingModule
  ]
})
export class MuestrasModule { }
