import { Component, OnInit } from '@angular/core';
import { Vehiculo } from '../../models/vehiculo.model';
import { VehiculoService } from '../../services/vehiculo.service';

@Component({
  selector: 'app-vehiculos',
  templateUrl: './vehiculos.component.html',
  styles: [
  ]
})
export class VehiculosComponent implements OnInit {

  vehiculos: Vehiculo[] = [];

  constructor(
    private vehiculoService: VehiculoService
  ) { }

  ngOnInit(): void {
    this.getAllVehiculos();
  }

  getAllVehiculos() {
    this.vehiculoService.findAllVehiculo()
      .subscribe(data => {
        this.vehiculos = data.map(({ id, attributes: { placa, tipoVehiculo, usuario } }) => {
          return new Vehiculo(id.toString(), placa, tipoVehiculo, usuario)
        });
      });
  }

}
