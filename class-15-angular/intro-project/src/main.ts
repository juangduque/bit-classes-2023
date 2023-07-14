/*
  Este archivo es el punto de entrada de la aplicación. Angular se encarga de cargar el módulo principal de la aplicación (AppModule) y de arrancar la aplicación.
*/

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';


platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
