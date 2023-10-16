import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AhorrosComponent } from './ahorros.component';

const routes: Routes = [{path: '', component: AhorrosComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AhorrosRoutingModule { }
