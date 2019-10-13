import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './componentes/login/login.component';
import { HomeComponent } from './componentes/home/home.component';
import { PagenotfoundComponent } from './componentes/pagenotfound/pagenotfound.component';


const routes: Routes = [
    { path:'login', component: LoginComponent },
    { path:'', component: HomeComponent },
    {path:'pagenotfound', component: PagenotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
