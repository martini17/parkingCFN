import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Vehiculo } from '../interface/vehiculo.interface';
import { map, Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VehiculoService {

  constructor(
    private httpClient: HttpClient
  ) { }


  findAllVehiculo(): Observable<Vehiculo[]> {
    return this.httpClient.get<Vehiculo[]>('http://localhost:1337/api/vehiculos')
      .pipe(
        tap(console.warn),
        map(({ data, meta }) => data)
      );
  }
}
