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
    
    const paramLogin = "/empleado/logincapt";
    const bodyLogin = {usuario:empleadoLogin.usuario,clave:empleadoLogin.clave,captcha:empleadoLogin.captcha};
    return this.loginService.postRequest(paramLogin,bodyLogin)
                     .toPromise();
  }
  isLoggedIn(){
    const usuarioLogueado = localStorage.getItem("usuarioToken"); 
    if(usuarioLogueado){
      return true;
    }
    else{
      return false;
    }
  }
}
