import { Component, OnInit, Input,Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {LoginComponent} from '../login/login.component';
import {LoginService} from '../../servicios/login.service';


import '@angular/common';
import { IEmpleadoLogin } from 'src/app/clases/empleado';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public dialog:MatDialog,private router:Router) { }
  private isLogin:boolean=false;
  @Input() ngStyle: { [klass: string]: any; }
  
  ngOnInit() {
  }
}
