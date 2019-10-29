import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './componentes/login/login.component';
import { HomeComponent } from './componentes/home/home.component';
import { PagenotfoundComponent } from './componentes/pagenotfound/pagenotfound.component';
import {AltaComponent} from './componentes/alta/alta.component';
import { BienvenidoComponent } from './componentes/bienvenido/bienvenido.component';
import { CabeceraComponent } from './componentes/cabecera/cabecera.component';
import { CanActivateGuard } from './can-activate.guard';
import { PedidosComponent } from './componentes/pedidos/pedidos.component';

const routes: Routes = [
    { path:'login', component: LoginComponent },
    { path:'', component: HomeComponent },
    {path:'pagenotfound', component: PagenotfoundComponent},
    {path:'alta',component:AltaComponent},
    {path:'cabecera',component:CabeceraComponent,canActivate:[CanActivateGuard]},
    {path:'bienvenido',component:BienvenidoComponent},
    {path:'pedidos',component:PedidosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
