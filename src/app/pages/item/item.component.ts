import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductosService } from '../../services/productos.service';
import { ProductoDescripcion } from '../../interfaces/producto-descripcion.interface';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  producto: ProductoDescripcion;
  id: string;

  constructor( private route: ActivatedRoute,
              public productoService: ProductosService ) { } // para pasar los parametros en la url es necesario usar este servicio


  ngOnInit() {
    this.route.params
    .subscribe( parametros => {
      // console.log(parametros['id']); // lee todos los parametros que se reciben en la url
      this.productoService.getProducto(parametros['id'])
      .subscribe((producto: ProductoDescripcion) => {
        this.id = parametros['id'];
        this.producto = producto;
        console.log(producto);
      });
    }); // subscribe va a estar pendiente de todos los parametros que se rciban en la url
  }

}
