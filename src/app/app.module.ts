import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { App } from './app';

import { ProductPageComponent } from './Features/components/product-page.component';
import { ProductFormComponent } from './Features/components/product-form.component';
import { ProductListComponent } from './Features/components/product-list.component';
import { ProductCardComponent } from './Features/components/product-card.component';
import { ProductService } from './Features/Products/services/Product.service';

@NgModule({
declarations: [
  App,
  ProductPageComponent,
  ProductFormComponent,
  ProductListComponent,
  ProductCardComponent
],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [
    ProductService
  ],
  bootstrap: [
    App
  ]
})
export class AppModule {}