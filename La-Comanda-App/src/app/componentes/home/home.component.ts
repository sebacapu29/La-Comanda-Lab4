import { Component, OnInit, Input,Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {LoginComponent} from '../login/login.component';

import '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public dialog:MatDialog) { }
  private isLogin:boolean=false;
  @Input() ngStyle: { [klass: string]: any; }
  
  ngOnInit() {
  }
  openDialog():void{
    const dialogRef = this.dialog.open(LoginComponent,{height: 'auto',
    width: '250px', data: 'mensaje'});
    dialogRef.afterClosed().subscribe(res => {console.log(res); });
  }

}
