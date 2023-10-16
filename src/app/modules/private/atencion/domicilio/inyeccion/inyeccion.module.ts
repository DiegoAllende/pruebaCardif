import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InyeccionRoutingModule } from './inyeccion-routing.module';
import { InyeccionComponent } from './pages/inyeccion/inyeccion.component';


@NgModule({
  declarations: [
    InyeccionComponent
  ],
  imports: [
    CommonModule,
    InyeccionRoutingModule
  ]
})
export class InyeccionModule { }
