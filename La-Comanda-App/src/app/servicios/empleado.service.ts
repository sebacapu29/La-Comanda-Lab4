import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { Empleado } from '../clases/empleado';

@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {

  constructor(private httpService:HttpService) { }

  
  altaEmpleado(empleadoAlta:Empleado){
    const paramLogin = "/empleado";
    const bodyLogin = {usuario:empleadoAlta.usuario,
                      clave:empleadoAlta.clave,
                      tipo:empleadoAlta.tipo,
                      nombre:empleadoAlta.nombre,
                      apellido:empleadoAlta.apellido,
                    sector: empleadoAlta.sector};
    return this.httpService.postRequest(paramLogin,bodyLogin)
                     .toPromise();
  }
}
