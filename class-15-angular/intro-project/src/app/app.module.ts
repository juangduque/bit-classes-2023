/*
  Este archivo es para configurar el módulo principal de la aplicación. Angular se encarga de cargar el
  módulo principal de la aplicación (AppModule) y de arrancar la aplicación.

  El módulo principal de la aplicación es el módulo que arranca la aplicación y que contiene todos los
  componentes, servicios, pipes, etc. que se van a utilizar en la aplicación.
*/

import { NgModule } from '@angular/core'; // Importamos el decorador NgModule
import { BrowserModule } from '@angular/platform-browser'; // Importamos el módulo BrowserModule

import { AppComponent } from './app.component'; // Importamos el componente AppComponent (el componente principal de la aplicación)
import { HeaderComponent } from './components/header/header.component'; // Importamos el componente HeaderComponent
import { SideBarComponent } from './components/side-bar/side-bar.component'; // Importamos el componente SideBarComponent
import { VideosGridComponent } from './components/videos-grid/videos-grid.component'; // Importamos el componente VideosGridComponent
import { FiltersButtonsComponent } from './components/filters-buttons/filters-buttons.component'; // Importamos el componente FiltersButtonsComponent

/* El decorador NgModule recibe un objeto de configuración con las siguientes propiedades:
  - declarations: Aquí se declaran todos los componentes, directivas y pipes que pertenecen a este módulo.
  - imports: Aquí se importan otros módulos que necesitamos para que este módulo funcione correctamente.
  - providers: Aquí se declaran los servicios que pertenecen a este módulo.
  - bootstrap: Aquí se declara el componente principal de la aplicación para aplicar los estilos de la
  librería bootstrap.
*/
@NgModule({
  declarations: [
    AppComponent, // El componente principal de la aplicación
    HeaderComponent, // El componente HeaderComponent
    SideBarComponent, // El componente SideBarComponent
    VideosGridComponent, // El componente VideosGridComponent
    FiltersButtonsComponent // El componente FiltersButtonsComponent
  ],
  imports: [
    BrowserModule // El módulo BrowserModule, sirve para que la aplicación funcione en un navegador web.
  ],
  providers: [], // Aquí se declaran los servicios que pueden ser utilizados por los componentes de este módulo.
  bootstrap: [AppComponent] // Aquí se declara el componente principal de la aplicación para aplicar los estilos de la librería bootstrap.
})
export class AppModule { } // Exportamos el módulo principal de la aplicación
