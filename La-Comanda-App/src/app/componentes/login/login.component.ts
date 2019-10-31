import { Component, OnInit,Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {IEmpleadoLogin, Empleado} from '../../clases/empleado';
import { FormGroup, Validators, FormControl, FormBuilder } from '@angular/forms';
import { LoginService } from 'src/app/servicios/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  miEmpleadoLogin:IEmpleadoLogin;
  public captcha:string="empty";
  public captchaResolved:boolean =false;
  
  constructor(public dialogRef: MatDialogRef<LoginComponent>,
    @Inject(MAT_DIALOG_DATA) public mensaje:string,private loginService:LoginService) { 
      this.miEmpleadoLogin = new Empleado('','','');
    }

    ngOnInit(){
   
    }

    onNoClick(): void {
      // const {value, valid} = this.form;
  
      this.dialogRef.close();
    }
    resolved(captchaResponse: string) {
      // console.log(`Resolved captcha with response: ${captchaResponse}`);
      this.captchaResolved = true;
      this.miEmpleadoLogin.captcha = captchaResponse;
  }
}
