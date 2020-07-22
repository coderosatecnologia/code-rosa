import { IntegrantesComponent } from './modules/integrantes/integrantes.component';
import { InformacoesComponent } from './modules/informacoes/informacoes.component';
import { GaleriaComponent } from './modules/galeria/galeria.component';
import { EventosComponent } from './modules/eventos/eventos.component';


import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProjetosComponent } from './modules/projetos/projetos.component';
import { CabecarioComponent } from './shared/cabecario/cabecario.component';
import { RodaPeComponent } from './shared/roda-pe/roda-pe.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import {MatToolbarModule} from '@angular/material/toolbar';

@NgModule({
  declarations: [
    AppComponent,
    IntegrantesComponent,
    InformacoesComponent,
    GaleriaComponent,
    ProjetosComponent,
    EventosComponent,
    CabecarioComponent,
    RodaPeComponent,
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatToolbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
