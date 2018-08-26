import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { MaterialModule } from './material.module';

import { MapaComponent } from './components/mapa/mapa.component';
import { EditarMapaComponent } from './components/mapa/editar-mapa.component';

import { AgmCoreModule } from '@agm/core';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({

  entryComponents:[
    EditarMapaComponent
  ],

  declarations: [
    AppComponent,
    MapaComponent,
    EditarMapaComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyA074Y-Yho28ziC4Y1VScbmjw4hdiDvxjA'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
