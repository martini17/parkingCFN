import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './pages/home/home.component';
import { SharedModule } from '../shared/shared.module';
import { VehiculosComponent } from './pages/vehiculos/vehiculos.component';
import { HomeRoutingModule } from './home-routing.module';
import { ReportComponent } from './pages/report/report.component';
import { TarifasComponent } from './pages/tarifas/tarifas.component';
import { TiposComponent } from './pages/tipos/tipos.component';
import { UsuarioComponent } from './pages/usuario/usuario.component';
import { AjustesComponent } from './pages/ajustes/ajustes.component';



@NgModule({
  declarations: [
    HomeComponent,
    VehiculosComponent,
    ReportComponent,
    TarifasComponent,
    TiposComponent,
    UsuarioComponent,
    AjustesComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule,
  ]
})
export class HomeModule { }
