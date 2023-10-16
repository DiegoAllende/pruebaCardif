import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: "", redirectTo: "/consultas/mov", pathMatch: "full" },
  { path: "mov", loadChildren: () => import('./pages/movimientos/movimientos.module').then(p => p.MovimientosModule) },
  { path: "ahorros", loadChildren: () => import('./pages/ahorros/ahorros.module').then(p => p.AhorrosModule) },
  { path: "creditos", loadChildren: () => import('./pages/creditos/creditos.module').then(p => p.CreditosModule) },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConsultasRoutingModule { }
