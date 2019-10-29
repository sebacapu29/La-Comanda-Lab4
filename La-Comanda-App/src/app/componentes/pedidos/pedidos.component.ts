import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import * as jsPDF from 'jspdf';

@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.component.html',
  styleUrls: ['./pedidos.component.css']
})

export class PedidosComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  displayedColumns: string[] = ['estado', 'tiempoestimado', 'tiempoentrega', 'codigo','idmesa','cliente','foto','importe'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  downloadPDF(){
    var doc = new jsPDF();
    doc.setFontSize(35);
    doc.text(35, 25, 'Pedido Test');
    doc.text(35, 40, 'Pedido Test');
    doc.text(35, 55, 'Pedido Test');
    doc.text(35, 70, 'Pedido Test');
    doc.text(35, 85, 'Pedido Test')
  
    doc.save('Pedidos.pdf');
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