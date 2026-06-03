import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { App } from './app';
import { ProductosComponent } from './CRUD_Productos/ProductosComponent';

@NgModule({
  declarations: [
    App
  ],
  imports: [
    BrowserModule,
    ProductosComponent  
  ],
  bootstrap: [App]
})
export class AppModule { }