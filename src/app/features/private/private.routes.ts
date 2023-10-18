import { Routes } from "@angular/router";

export const routes: Routes = [
  {
    path: 'atencion',
    children: [
      {
        path: 'domicilio',
        children: [
          {
            path: 'muestras',
            loadChildren: () => import('./atencion/domicilio/muestras/muestras.routes').then(f => f.routes)
          },
          {
            path: 'inyecciones',
            loadChildren: () => import('./atencion/domicilio/inyecciones/inyecciones.routes').then(f => f.routes)
          }
        ]
      }
    ]
  },
]