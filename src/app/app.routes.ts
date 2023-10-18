import { Routes } from "@angular/router";
import { LayoutAuhtComponent } from "./layout/layout-auth/pages/layout-auht/layout-auht.component";
import { LayoutMainComponent } from "./layout/layout-main/pages/layout-main/layout-main.component";

export const routes: Routes = [
  {
    path: '', redirectTo: '/', pathMatch: "full"
  },
  {
    path: 'login',
    component: LayoutAuhtComponent,
    loadChildren: () => import('./features/public/public.routes').then(f => f.routes)
  },
  {
    path: '',
    component: LayoutMainComponent,
    loadChildren: () => import('./features/private/private.routes').then(f => f.routes)
  },
  {
    path: '**', redirectTo: '/', pathMatch: "full"
  },
]