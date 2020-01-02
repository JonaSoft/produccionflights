import { Injectable } from '@angular/core';
import { HttpClient } from  '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class PaisesService {
  
  URL_PAIS = '/flights/paises';
  URL_CIUDADES = '/flights/ciudades'

  constructor(private httpPais:HttpClient,
              private httpCiudades:HttpClient) { 

  }
  mostrarDataPaises(){
    return this.httpPais.get(this.URL_PAIS)
  }
  mostrarDataCiudades(){
    return this.httpCiudades.get(this.URL_CIUDADES)
  }

}
