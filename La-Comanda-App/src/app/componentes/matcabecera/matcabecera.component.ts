import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { MatDialog } from '@angular/material';
import { LoginService } from 'src/app/servicios/login.service';
import { Router, ActivatedRoute } from '@angular/router';
import { LoginComponent } from '../login/login.component';
import { IEmpleadoLogin } from 'src/app/clases/empleado';

@Component({
  selector: 'app-matcabecera',
  templateUrl: './matcabecera.component.html',
  styleUrls: ['./matcabecera.component.css']
})
export class MatcabeceraComponent {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );


  constructor(private breakpointObserver: BreakpointObserver,public dialog:MatDialog,private loginService:LoginService,private router:Router,private route: ActivatedRoute) {}
  public isLogin:boolean=false;
  public msjBienvenida:string;
  public recaptcha:boolean=false;

  ngOnInit() {  

    this.isLogin = this.loginService.isLoggedIn();
    this.msjBienvenida = this.isLogin ? localStorage.getItem("usuarioDesc") : "";
    this.loginService.changeLoginStatus$.subscribe((loggedStatus:boolean)=> {this.isLogin = loggedStatus});
  }
  public resolved(captchaResponse: string) {
    console.log(`Resolved captcha with response: ${captchaResponse}`);
  }
  openDialog():void{
    const dialogRef = this.dialog.open(LoginComponent,{height: 'auto',
    width: '280px', data: 'mensaje'});
    dialogRef.afterClosed().subscribe(res => {

      if(res != null){
        console.log(res);
          this.loginService.Login(<IEmpleadoLogin>res).then(res=> {
            console.log(res);
              if(res.status!=500){
                localStorage.setItem("usuarioToken",JSON.stringify(res.token));
                localStorage.setItem("usuarioDesc",JSON.stringify(res.respuesta));
                this.isLogin=true;
                this.msjBienvenida = res.respuesta;
              }
              else{
                // console.log(res);
                alert("Error, usuario o contraseña incorrecta");
              }
          }).finally(()=>{      
          });
        }      
     });
  }
  habilitarLogin(){
    this.recaptcha=true;
  }
  verListaPedidos(){
    this.router.navigateByUrl("/pedidos")
  }
  logOut(){
    localStorage.removeItem("usuarioToken");
    localStorage.removeItem("usuarioDesc");
    localStorage.removeItem("pedidos");
    this.isLogin =false;
  }
}
