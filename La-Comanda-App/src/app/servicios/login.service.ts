import { Injectable } from '@angular/core';
import { HttpService } from '../servicios/http.service';
import {IEmpleadoLogin} from '../clases/empleado';
import { Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  public changeLoginStatusSubject = new Subject<boolean>();
  public changeLoginStatus$ = this.changeLoginStatusSubject.asObservable();

  constructor(private loginService:HttpService) { }

  Login(empleadoLogin:IEmpleadoLogin){
    
    const paramLogin = "/empleado/login";
    const bodyLogin = {usuario:empleadoLogin.usuario,clave:empleadoLogin.clave};
    return this.loginService.postRequest(paramLogin,bodyLogin)
                     .toPromise();
  }
  isLoggedIn(){
    const usuarioLogueado = localStorage.getItem("usuarioToken"); 
    if(usuarioLogueado){
      // this.cabecera.isLogin=true;
      return true;
    }
    else{
      // this.router.navigate(['/cabecera']);
      // this.cabecera.openDialog();
      return false;
    }
  }
}
