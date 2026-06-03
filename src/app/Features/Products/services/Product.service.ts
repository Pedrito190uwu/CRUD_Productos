import { Injectable } from '@angular/core';
import { Product } from '../product';

@Injectable()
export class ProductService {

  products: Product[] = [];
  id = 1;

  getProducts() {
    return this.products;
  }

  addProduct(nombre: string, precio: number) {
    this.products.push({
      id: this.id++,
      nombre,
      precio
    });
  }

  deleteProduct(id: number) {
    this.products = this.products.filter(
      p => p.id !== id
    );
  }
}