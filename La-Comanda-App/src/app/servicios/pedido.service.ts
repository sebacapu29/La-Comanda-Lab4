import { Injectable } from '@angular/core';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class PedidoService {

  constructor(private loginService:HttpService) { }

  getPedidos(token:string){
    const paramPedidos = "/pedido";

    return this.loginService.getRequestWithToken(token,paramPedidos)
                     .toPromise();
  }
}
