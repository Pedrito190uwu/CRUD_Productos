import { Component } from '@angular/core';
import { ProductService } from '../Products/services/Product.service';
@Component({
  selector: 'app-product-form',
  standalone: false,
  templateUrl: './product-form.component.html'
})
export class ProductFormComponent {

  nombre = '';
  precio = 0;

  constructor(private service: ProductService) {}

  crear() {

    if (!this.nombre || this.precio <= 0) {
      return;
    }

    this.service.addProduct(
      this.nombre,
      this.precio
    );

    this.nombre = '';
    this.precio = 0;
  }
}