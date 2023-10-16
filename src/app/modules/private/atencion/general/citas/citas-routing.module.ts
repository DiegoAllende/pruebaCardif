import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CitaComponent } from './pages/cita/cita.component';

const routes: Routes = [{path: '', component: CitaComponent}, {path: '**', redirectTo: ''}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CitasRoutingModule { }
