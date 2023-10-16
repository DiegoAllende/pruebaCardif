import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InyeccionComponent } from './pages/inyeccion/inyeccion.component';

const routes: Routes = [{path: '', component: InyeccionComponent}, {path: '**', redirectTo: ''}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InyeccionRoutingModule { }
