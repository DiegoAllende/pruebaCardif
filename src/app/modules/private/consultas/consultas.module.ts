import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConsultasRoutingModule } from './consultas-routing.module';
import { Comp2Component } from './components/comp2/comp2.component';


@NgModule({
  declarations: [
    Comp2Component
  ],
  imports: [
    CommonModule,
    ConsultasRoutingModule
  ]
})
export class ConsultasModule { }
