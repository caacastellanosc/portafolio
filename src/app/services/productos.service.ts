import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Producto } from '../interfaces/productos.interfaces';
@Injectable({
  providedIn: 'root'
})



export class ProductosService {

  cargando = true;
  productos: Producto[] = [];

  constructor( private http: HttpClient) { 
    this.cargarProductos();
  }

  private cargarProductos() {
    this.http.get('https://angular-html-e9102.firebaseio.com/productos_idx.json')
    .subscribe( (resp: Producto[])  => {
      this.productos = (resp);
      this.cargando = false;
    });
  }

  getProducto( id: string){
    return this.http.get(`https://angular-html-e9102.firebaseio.com/productos/${ id }.json`);
  }

}
