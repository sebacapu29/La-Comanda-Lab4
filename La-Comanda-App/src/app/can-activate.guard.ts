import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from './servicios/login.service';

@Injectable({
  providedIn: 'root'
})
export class CanActivateGuard implements CanActivate {

  constructor(private router:Router,private loginService:LoginService){}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree > | boolean | UrlTree{

      if(this.loginService.isLoggedIn()){
        return true;
      }
      else{
        // alert("Debe loguearse");    
        this.router.navigateByUrl("");
        return false;
      }
    
  }
  
}
