import { Component } from '@angular/core';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent {
  contadorCarrito: number = 0;//Contador

  notificar(): void {
    const preguntar: boolean = confirm("¿Desea agregar este producto?");
    if (preguntar) {
      this.contadorCarrito++;//Aumentador
      alert("Se ha agregado el producto al carrito");
    } else {
      alert("El producto no se ha agregado");
    }
  }
}