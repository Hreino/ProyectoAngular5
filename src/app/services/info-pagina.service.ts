import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {
  info: InfoPagina = {};
  cargada = false;
  equipo: any [] = [];
  constructor( private http: HttpClient) {

    // console.log('Servicio de pagina cargado');
      this.cargarInfo();
      this.cargarEquipo();
   }
private cargarInfo() {
    // Leer archivo JSON
    this.http.get('assets/data/data-pagina.json')
    .subscribe( (resp: InfoPagina) => {
      this.cargada = true;
      this.info = resp;
      // Obteniendo la propiedad especifica del objeto js que genera el JSON
 });
}

private cargarEquipo() {
  this.http.get('https://angular-html-c29f0.firebaseio.com/equipo.json')
  .subscribe( (resp: any[]) => {
   this.equipo = resp;
    // console.log(resp);
});
}
}
