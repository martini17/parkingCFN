import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ReportComponent } from './pages/report/report.component';
import { TarifasComponent } from './pages/tarifas/tarifas.component';
import { TiposComponent } from './pages/tipos/tipos.component';
import { VehiculosComponent } from './pages/vehiculos/vehiculos.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: 'vehiculo',
        component: VehiculosComponent
      },
      {
        path: 'report',
        component: ReportComponent
      },
      {
        path: 'tipos',
        component: TiposComponent
      },
      {
        path: 'tarifas',
        component: TarifasComponent
      },
      {
        path: '**',
        redirectTo: '',
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
