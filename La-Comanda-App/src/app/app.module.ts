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
        MatInputModule} from '@angular/material';
import {FormsModule} from '@angular/forms';
import { PagenotfoundComponent } from './componentes/pagenotfound/pagenotfound.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    PagenotfoundComponent
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
    MatInputModule
    ],
    // exports:[
    //   MatMenuModule,
    //   MatDialogModule,
    //   MatButtonModule
    // ],
    entryComponents:[LoginComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
