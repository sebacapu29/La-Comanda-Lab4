import { Component, OnInit,ElementRef,ViewChild } from '@angular/core';
import {MatTableDataSource, MatTable} from '@angular/material/table';
import { HelperApi } from 'src/app/clases/helper-api';
import { PedidoService } from 'src/app/servicios/pedido.service';

@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.component.html',
  styleUrls: ['./pedidos.component.css']
})

export class PedidosComponent implements OnInit {

  public helper:HelperApi = new HelperApi();
  @ViewChild('tablaPedido', {static: false}) tablaPedido : ElementRef;

  constructor(private pedidoService:PedidoService) { }

  ngOnInit() {
  }

  displayedColumns: string[] = ['estado', 'tiempoestimado', 'tiempoentrega', 'codigo','idmesa','cliente','foto','importe'];
  dataSource = new MatTableDataSource();

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  downloadPDF(){
    this.helper.downloadPDF(this.dataSource.data);
  }
  traerPedidos(){
    const token = localStorage.getItem("usuarioToken");
    const pedidoStored = localStorage.getItem("pedidos");
    if(pedidoStored==null){
      this.pedidoService.getPedidos(token).then(res => {
        this.dataSource.data = res.respuesta;
        localStorage.setItem("pedidos",JSON.stringify(res.respuesta));
        console.log(res);
      });
    }
    else{
      this.dataSource.data = JSON.parse(pedidoStored);
    }
  }
  downloadExcel(){
    this.helper.downloadFile(this.dataSource.data);
  }
}
export interface Pedidos {
  estado: string;
  tiempoestimado: string;
  tiempoentrega: string;
  codigo: string;
  idmesa:number;
  cliente: string;
  foto: string;
  importe:number;
}
const ELEMENT_DATA: Pedidos[] =[
  {
    estado: "0",
    "tiempoestimado": "00:00:00",
    "tiempoentrega": "00:00:00",
    "codigo": "P000",
    "idmesa": 1,
    "foto": "[Empty]",
    "cliente": "Jhonson",
    "importe": 555.00
},
{
    "estado": "2",
    "tiempoestimado": "14:30:00",
    "tiempoentrega": "14:48:26",
    "codigo": "P0002",
    "idmesa": 1,
    "foto": "mesa1_19-10-2019.jpg",
    "cliente": "Jhonson",
    "importe": 542.00
}
];