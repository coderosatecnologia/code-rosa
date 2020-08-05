import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IntegrantesComponent } from './modules/integrantes/integrantes.component';
import { InformacoesComponent } from './modules/informacoes/informacoes.component';
import { GaleriaComponent } from './modules/galeria/galeria.component';
import { EventosComponent } from './modules/eventos/eventos.component';


import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProjetosComponent } from './modules/projetos/projetos.component';
import { MatSliderModule } from '@angular/material/slider';
import {MatToolbarModule} from '@angular/material/toolbar';
import { DragScrollModule } from 'ngx-drag-scroll';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';

// 1. Import the libs you need
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { HomeComponent } from './modules/home/home.component';
import {MatCardModule} from '@angular/material/card';
import { NgxGalleryModule } from 'ngx-gallery-9'


// 2. Add your credentials from step 1
var firebaseConfig = {
  apiKey: "AIzaSyAQixCaQSBooUJlNo1Seyhq9BSaVzxAKs4",
  authDomain: "coderosa2020.firebaseapp.com",
  databaseURL: "https://coderosa2020.firebaseio.com",
  projectId: "coderosa2020",
  storageBucket: "coderosa2020.appspot.com",
  messagingSenderId: "569081094779",
  appId: "1:569081094779:web:522eec9b3d8e454d3ff8de"
};

@NgModule({
  declarations: [
    AppComponent,
    IntegrantesComponent,
    InformacoesComponent,
    GaleriaComponent,
    ProjetosComponent,
    EventosComponent,
    HomeComponent,

  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatToolbarModule,
    DragScrollModule,
    MatIconModule,
    MatButtonModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireStorageModule, // storage
    MatCardModule,
    NgxGalleryModule

  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
