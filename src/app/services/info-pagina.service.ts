import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {
  info: InfoPagina = {};
  cargada = false;

  constructor( private http: HttpClient) {

    console.log('Servicio de pagina cargado');

    // Leer archivo JSON
    this.http.get('assets/data/data-pagina.json')
      .subscribe( (resp: InfoPagina) => {
        this.cargada = true;
        this.info = resp;
        console.log(resp);
        // Obteniendo la propiedad especifica del objeto js que genera el JSON
      });
   }
}
