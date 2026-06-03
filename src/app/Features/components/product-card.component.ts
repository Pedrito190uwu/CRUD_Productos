import { Component, Input } from '@angular/core';
import { Product } from '../Products/product';
import { ProductService } from '../Products/services/Product.service';

@Component({
  selector: 'app-product-card',
  standalone: false,
  templateUrl: './product-card.component.html'
})
export class ProductCardComponent {

  @Input() product!: Product;

  constructor(
    private service: ProductService
  ) {}

  eliminar() {
    this.service.deleteProduct(
      this.product.id
    );

    
  }
}