import { Injectable } from '@angular/core';
import { HttpService } from '../servicios/http.service';
import {IEmpleadoLogin} from '../clases/empleado';
import { Subject } from 'rxjs';
import { JwtHelperService } from '@auth0/angular-jwt';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  public changeLoginStatusSubject = new Subject<boolean>();
  public changeLoginStatus$ = this.changeLoginStatusSubject.asObservable();
  private helperJWT = new JwtHelperService();

  constructor(private loginService:HttpService) { }

  Login(empleadoLogin:IEmpleadoLogin){
    
    const paramLogin = "/empleado/logincapt";
    const bodyLogin = {usuario:empleadoLogin.usuario,
                       clave:empleadoLogin.clave,
                       captcha:empleadoLogin.captcha};
    return this.loginService.postRequest(paramLogin,bodyLogin)
                     .toPromise();
  }
  isLoggedIn(){
    const usuarioLogueado = localStorage.getItem("usuarioToken"); 
    const isExpired = this.helperJWT.isTokenExpired(usuarioLogueado);
    
    if(usuarioLogueado && !isExpired){
      return true;
    }
    else{
      this.logOutService();
      return false;
    }
  }
  logOutService(){
    localStorage.removeItem("usuarioToken");
    localStorage.removeItem("usuarioDesc");
    localStorage.removeItem("pedidos");
  }
}
