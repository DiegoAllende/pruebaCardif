import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagoTelefonoRoutingModule } from './pago-telefono-routing.module';
import { PagoTelefonoComponent } from './pago-telefono.component';


@NgModule({
  declarations: [
    PagoTelefonoComponent
  ],
  imports: [
    CommonModule,
    PagoTelefonoRoutingModule
  ]
})
export class PagoTelefonoModule { }
