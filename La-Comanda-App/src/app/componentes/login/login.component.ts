import { Component, OnInit,Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {IEmpleadoLogin, Empleado} from '../../clases/empleado';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  miEmpleadoLogin:IEmpleadoLogin;

  constructor(public dialogRef: MatDialogRef<LoginComponent>,
    @Inject(MAT_DIALOG_DATA) public mensaje:string) { 
      this.miEmpleadoLogin = new Empleado('','');
    }
    
    ngOnInit(){
    }

    onNoClick(): void {
      this.dialogRef.close();
    }
}
