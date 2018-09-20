import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProductoInterface } from '../interfaces/producto.interface';


@Injectable({
  providedIn: 'root'
})
export class ProductosService {
  cargando = true;
  productosFiltrado: ProductoInterface[] = [];
  productos: ProductoInterface[] = [];
  constructor( private http: HttpClient ) {
    this.cargarProductos();
  }


  private cargarProductos() {
    this.http.get('https://angular-html-c29f0.firebaseio.com/productos_idx.json')
    .subscribe( (resp: ProductoInterface[]) => {
      setTimeout(() => {
        this.productos = resp;
        this.cargando = false;
      }, 1000); // Delay estatico de un segundo

    } );
  }

  // para poder cambiar el contenido de ccada item cuando se de clcic sobre la imagen
  getProducto (id: string) {
    return this.http.get(`https://angular-html-c29f0.firebaseio.com/productos/${id}.json`);
    // las "tildes" que encierran la url son para poder concatenar codigo javascript dentro del string del url

  }

  buscarProducto(termino: string) {
   this.productosFiltrado =  this.productos.filter( producto => {
      return true;
    });

  }
}
