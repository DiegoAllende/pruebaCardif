import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagoReciboComponent } from './pago-recibo.component';

const routes: Routes = [{path: "", component: PagoReciboComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagoReciboRoutingModule { }
