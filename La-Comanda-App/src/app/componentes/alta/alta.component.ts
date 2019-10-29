import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Empleado } from 'src/app/clases/empleado';

@Component({
  selector: 'app-alta',
  templateUrl: './alta.component.html',
  styleUrls: ['./alta.component.css']
})
export class AltaComponent implements OnInit {

  constructor(private router:Router) { }
  public nombre:string;
  public apellido:string;
  public tipo:string;
  public sector:string;
  public usuario:string;
  public clave:string;
  public claveReing:string;

  ngOnInit() {
  }
  enviarEmpleado(){
    let empleado:Empleado =  new Empleado(this.usuario,this.clave,this.tipo);
    empleado.nombre = this.nombre;
    empleado.apellido = this.apellido;
    empleado.sector = 1;
    // empleado
    
    console.log(empleado);
  }
  backToHome(){
    this.router.navigateByUrl('');
  }
}
