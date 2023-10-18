import { Routes } from "@angular/router";

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./login/login.routes').then(f => f.routes)
  },
]