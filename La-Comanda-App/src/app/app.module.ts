import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './componentes/home/home.component';
import { LoginComponent } from './componentes/login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule,
        MatMenuModule, 
        MatDialogModule, 
        MatFormFieldModule, 
        MatSliderModule,
        MatInputModule,
        MatSelectModule} from '@angular/material';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { PagenotfoundComponent } from './componentes/pagenotfound/pagenotfound.component';
import { AltaComponent } from './componentes/alta/alta.component';
import { BienvenidoComponent } from './componentes/bienvenido/bienvenido.component';
import { CabeceraComponent } from './componentes/cabecera/cabecera.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    PagenotfoundComponent,
    AltaComponent,
    BienvenidoComponent,
    CabeceraComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatMenuModule,
    MatDialogModule,
    FormsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    HttpClientModule,
    MatSelectModule
    ],
    entryComponents:[LoginComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
