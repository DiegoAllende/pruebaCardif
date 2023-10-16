import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginLayoutComponent } from './container/login-layout/login-layout.component';
import { MainLayoutComponent } from './container/main-layout/main-layout.component';
import { LoginGuard } from '@core/guards/login.guard';
import { MainGuard } from '@core/guards/main.guard';

const routes: Routes = [
  {
    path: "", redirectTo: "/", pathMatch: "full"
  },
  {
    path: "login",
    component: LoginLayoutComponent,
    loadChildren: () => import('../modules/public/public.module').then(m => m.PublicModule),
    canActivate: [MainGuard]
  },
  {
    path: "",
    component: MainLayoutComponent,
    loadChildren: () => import('../modules/private/private.module').then(m => m.PrivateModule),
    canActivate: [LoginGuard]
  },
  {
    path: "**", redirectTo: "/", pathMatch: "full"
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
