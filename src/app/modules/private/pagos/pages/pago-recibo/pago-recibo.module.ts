import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagoReciboRoutingModule } from './pago-recibo-routing.module';
import { PagoReciboComponent } from './pago-recibo.component';


@NgModule({
  declarations: [
    PagoReciboComponent
  ],
  imports: [
    CommonModule,
    PagoReciboRoutingModule
  ]
})
export class PagoReciboModule { }
