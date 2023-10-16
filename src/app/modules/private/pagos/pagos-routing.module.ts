import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: "", redirectTo: "/consultas/creditos/pagos/recibo", pathMatch: "full" },
  { path: "recibo", loadChildren: () => import('./pages/pago-recibo/pago-recibo.module').then(p => p.PagoReciboModule) },
  { path: "telefono", loadChildren: () => import('./pages/pago-telefono/pago-telefono.module').then(p => p.PagoTelefonoModule) },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagosRoutingModule { }
