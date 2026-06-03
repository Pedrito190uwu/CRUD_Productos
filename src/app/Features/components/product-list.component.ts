import { Component } from '@angular/core';
import { ProductService } from '../Products/services/Product.service';
@Component({
  selector: 'app-product-list',
  standalone: false,
  templateUrl: './product-list.component.html'
  
})
export class ProductListComponent {

  constructor(
    public service: ProductService
  ) {}
}