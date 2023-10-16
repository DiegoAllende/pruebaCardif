import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagoTelefonoComponent } from './pago-telefono.component';

const routes: Routes = [{path: "", component: PagoTelefonoComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagoTelefonoRoutingModule { }
