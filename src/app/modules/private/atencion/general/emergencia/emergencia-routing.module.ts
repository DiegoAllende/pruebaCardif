import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmergenciaComponent } from './pages/emergencia/emergencia.component';

const routes: Routes = [{path: '', component: EmergenciaComponent}, {path: '**', redirectTo: ''}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmergenciaRoutingModule { }
