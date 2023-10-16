import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MuestrasRoutingModule } from './muestras-routing.module';
import { MuestraComponent } from './pages/muestra/muestra.component';
import { Stand1Component } from '@modules/private/stand1/stand1.component';
import { Stand2Component } from '@shared/components/stand2/stand2.component';


@NgModule({
  declarations: [
    MuestraComponent
  ],
  imports: [
    CommonModule,
    MuestrasRoutingModule,
    Stand1Component,
    Stand2Component
  ]
})
export class MuestrasModule { }
