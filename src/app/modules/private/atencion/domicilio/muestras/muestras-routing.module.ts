import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MuestraComponent } from './pages/muestra/muestra.component';

const routes: Routes = [{path: '', component: MuestraComponent}, {path: '**', redirectTo: ''}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MuestrasRoutingModule { }
