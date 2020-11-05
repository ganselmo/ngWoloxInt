import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Country } from '../models/location.model';

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  countries: BehaviorSubject<Array<Country>>;

  constructor() {
    this.countries = new BehaviorSubject<Array<Country>>([])
  }

  initCountries() {
    const countries: Array<Country> =
      [
        {
          name: "Argentina",
          provinces: [
            { name: "Buenos Aires" },
            { name: "Catamarca" },
            { name: "Chaco" },
            { name: "Chubut" },
            { name: "Córdoba" },
            { name: "Corrientes" },
            { name: "Entre Ríos" },
            { name: "Formosa" },
            { name: "Jujuy" },
            { name: "La Pampa" },
            { name: "La Rioja" },
            { name: "Mendoza" },
            { name: "Misiones" },
            { name: "Provincia del Neuquén" },
            { name: "Río Negro" },
            { name: "Salta" },
            { name: "San Juan" },
            { name: "San Luis" },
            { name: "Santa Cruz" },
            { name: "Santa Fe" },
            { name: "Santiago del Estero" },
            { name: "Tierra del Fuego, Antártida e Islas del Atlántico Sur" },
            { name: "Tucumán" }

          ]
        },
        {
          name: "Chile",
          provinces: [
            { name: "Antofagasta" },
            { name: "Atacama" },
            { name: "Coquimbo" },
            { name: "Aconcagua" },
            { name: "Valparaíso" },
            { name: "Santiago" },

          ]
        },
        {
          name: "Colombia",
          provinces: [
            { name: "Antioquia" },
            { name: "Atlántico" },
            { name: "Bolívar" },
            { name: "Boyacá" },
            { name: "Cauca" },
            { name: "Chocó" },
          ]
        }
        ,
        {
          name: "Brasil",
          provinces: [
            { name: "Acre" },
            { name: "Amapá" },
            { name: "Bahía" },
            { name: "Mato Grosso" },
            { name: "Río de Janeiro" },
            { name: "São Paulo" },
          ]
        },
        {
          name: "Uruguay",
          provinces: [
            { name: "Artigas" },
            { name: "Canelones" },
            { name: "Melo" },
            { name: "Trinidad" },
            { name: "Florida" },
            { name: "Tacuarembó" },
          ]
        }
      ]
    this.countries.next(countries)
  }
  getCountries()
  {
    return this.countries.value
  }
}
