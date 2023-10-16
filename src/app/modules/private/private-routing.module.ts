import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: "",
    loadChildren: () => import('./main/main.module').then(p => p.MainModule)
  },
  {
    path: "consultas",
    loadChildren: () => import('./consultas/consultas.module').then(p => p.ConsultasModule),
  },
  {
    path: "atencion",
    children: [
      {
        path: "general",
        children: [
          {
            path: "emergencia",
            loadChildren: () => import('./atencion/general/emergencia/emergencia.module').then(m => m.EmergenciaModule)
          },
          {
            path: "citas",
            loadChildren: () => import('./atencion/general/citas/citas.module').then(m => m.CitasModule)
          }

        ]
      },
      {
        path: "domicilio",
        children: [
          {
            path: "muestras",
            loadChildren: () => import('./atencion/domicilio/muestras/muestras.module').then(m => m.MuestrasModule)
          },
          {
            path: "inyeccion",
            loadChildren: () => import('./atencion/domicilio/inyeccion/inyeccion.module').then(m => m.InyeccionModule)
          }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrivateRoutingModule { }
