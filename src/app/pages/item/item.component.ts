import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductosService } from '../../services/productos.service';
import { ProductoDescripcion } from '../../interfaces/producto-description.interfaces';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  cargando = true;
  producto: ProductoDescripcion;
  id: string;
  constructor( private route: ActivatedRoute,
               public productosService: ProductosService) { }

  ngOnInit(): void {

    this.route.params
    .subscribe( parametros => {

      console.log(parametros['id']);

      this.productosService.getProducto(parametros['id'])
      .subscribe( (producto: ProductoDescripcion) =>{
        this.id = parametros['id'];
        console.log(producto);
        this.producto = producto;
      });


    });
  }

}
