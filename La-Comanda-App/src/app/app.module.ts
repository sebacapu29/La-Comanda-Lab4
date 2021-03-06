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
        MatSelectModule,
        MatTableModule} from '@angular/material';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { PagenotfoundComponent } from './componentes/pagenotfound/pagenotfound.component';
import { AltaComponent } from './componentes/alta/alta.component';
import { BienvenidoComponent } from './componentes/bienvenido/bienvenido.component';
import { MatcabeceraComponent } from './componentes/matcabecera/matcabecera.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import {RecaptchaModule,RecaptchaFormsModule, RECAPTCHA_SETTINGS, RecaptchaSettings} from 'ng-recaptcha';
import { PedidosComponent } from './componentes/pedidos/pedidos.component';
import { HelperApi } from './clases/helper-api';
import { CanActivateGuard } from './can-activate.guard';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    PagenotfoundComponent,
    AltaComponent,
    BienvenidoComponent,
    MatcabeceraComponent,
    PedidosComponent
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
    MatSelectModule,
    LayoutModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatTableModule,
    RecaptchaModule.forRoot(),
    RecaptchaFormsModule,
    ],
    entryComponents:[LoginComponent],
  providers: [{
    provide: RECAPTCHA_SETTINGS,
    useValue: {
      siteKey: '6LddNr8UAAAAANgAoIyV_M0dhoziZUJVB-kxJYc0',
    } as RecaptchaSettings,
  },
  HelperApi,
  CanActivateGuard,
  LoginComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
