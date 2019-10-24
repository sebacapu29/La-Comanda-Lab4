import { Component, OnInit, Input } from '@angular/core';
import { MatDialog } from '@angular/material';
import { LoginService } from 'src/app/servicios/login.service';
import { Router, ActivatedRoute } from '@angular/router';
import { LoginComponent } from '../login/login.component';
import { IEmpleadoLogin } from 'src/app/clases/empleado';
import { JwtHelperService } from "@auth0/angular-jwt";

@Component({
  selector: 'app-cabecera',
  templateUrl: './cabecera.component.html',
  styleUrls: ['./cabecera.component.css']
})
export class CabeceraComponent implements OnInit {

  constructor(public dialog:MatDialog,private loginService:LoginService,private router:Router,private route: ActivatedRoute) { }
  public isLogin:boolean=false;
  public usuario:string;

  ngOnInit() {  
    this.isLogin = this.loginService.isLoggedIn();
    this.loginService.changeLoginStatus$.subscribe((loggedStatus:boolean)=> {this.isLogin = loggedStatus});
  }
  openDialog():void{
    const dialogRef = this.dialog.open(LoginComponent,{height: 'auto',
    width: '250px', data: 'mensaje'});
    dialogRef.afterClosed().subscribe(res => {
      if(res != null){
          this.loginService.Login(<IEmpleadoLogin>res).then(res=> {
              localStorage.setItem("usuarioToken",JSON.stringify(res.token));
              // console.log(res.respuesta);
              this.isLogin=true;
              this.usuario = res.usuario;

              
          }).finally(()=>{      
              this.verificarTipoEmpleado();
          });
        }      
     });
  }
  verificarTipoEmpleado(){
    const helper = new JwtHelperService();
    const token = localStorage.getItem("usuarioToken");      
    const decodedToken = helper.decodeToken(token);
    console.log(decodedToken.data);

    switch (decodedToken.data.tipo) {
      case 1:
        
        break;
        case 2:
        
        break;
        console.log("Bienvenido Cocinero"); 
        case 3:
        
        break;
        case 4:
        
        break;
        case 6:
        console.log("Bienvenido Administrador"); 
        break;

      default:
        break;
    }
  }
  logOut(){
    localStorage.removeItem("usuarioToken");
    this.isLogin =false;
  }
}
