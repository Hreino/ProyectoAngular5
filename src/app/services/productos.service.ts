import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProductoInterface } from '../interfaces/producto.interface';
// import { reject } from 'q';


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


  private cargarProductos(  ) {

    return new Promise( (resolve) => { // falta el reject
      this.http.get('https://angular-html-c29f0.firebaseio.com/productos_idx.json')
      .subscribe( (resp: ProductoInterface[]) => {
        setTimeout(() => {
          this.productos = resp;
          this.cargando = false;
        }, 1000); // Delay estatico de un segundo
        resolve();
      } );
    });

  }

  // para poder cambiar el contenido de ccada item cuando se de clcic sobre la imagen
  getProducto (id: string) {
    return this.http.get(`https://angular-html-c29f0.firebaseio.com/productos/${id}.json`);
    // las "tildes" que encierran la url son para poder concatenar codigo javascript dentro del string del url

  }

  buscarProducto(termino: string) {

    if (this.productos.length === 0) {
      // esperar a que esten cargados los productos
      this.cargarProductos().then(() => {
        // despues de tener los productos
        // aplicar filtro
        this.filtrarProductos(termino);

      });
    } else {
      // aplicar filtro
      this.filtrarProductos(termino);
    }


  }

  private filtrarProductos( termino: string) {
    termino = termino.toLocaleLowerCase();
    // console.log(this.productos);
    this.productosFiltrado = [];
    this.productos.forEach( prod => {
      const tituloLower = prod.titulo.toLocaleLowerCase();

      if (prod.categoria.indexOf(termino) >= 0 || (tituloLower.indexOf(termino) >= 0)) {
        this.productosFiltrado.push(prod);
      }
    });
  }
}
