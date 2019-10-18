import { Injectable } from '@angular/core';
import { HttpService } from '../servicios/http.service';
import {IEmpleadoLogin} from '../clases/empleado';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private loginService:HttpService) { }

  Login(empleadoLogin:IEmpleadoLogin){
    
    const paramLogin = "/empleado/login";
    const bodyLogin = {usuario:empleadoLogin.usuario,clave:empleadoLogin.clave};
    return this.loginService.postRequest(paramLogin,bodyLogin)
                     .toPromise();
  }
}
