import { Component } from '@angular/core';
import { InfoPaginaService } from './services/info-pagina.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor( public _infoPaginaService: InfoPaginaService) {
    // Para poder cargar el servicio de la pagina, es decir, el codigo jSon con la informacion que contiene


  }
}
