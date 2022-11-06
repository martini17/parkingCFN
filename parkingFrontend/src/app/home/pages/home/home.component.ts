import { Component, OnInit } from '@angular/core';
import { map, switchMap, tap } from 'rxjs';
import { ItemNavbar } from 'src/app/core/interfaces/itemNavbar.interface';
import { environment } from 'src/environments/environment';
import { Vehiculo } from '../../models/vehiculo.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [
  ]
})
export class HomeComponent implements OnInit {

  titleProject: string = environment.name_project;


  constructor() { }

  ngOnInit(): void { }



  public get navbar(): ItemNavbar[] {
    return [
      {
        name: 'Vehiculos',
        router: 'vehiculo'
      },
      {
        name: 'Reporte',
        router: 'report'
      },
      {
        name: 'Tipos',
        router: 'tipos'
      },
      {
        name: 'Tarifas',
        router: 'tarifas'
      },
      {
        name: 'Usuarios',
        router: ''
      },
      {
        name: 'Ajustes',
        router: ''
      },
    ]
  }



}
