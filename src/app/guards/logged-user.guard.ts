import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { FireauthService } from '@core/services/fireauth/fireauth.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoggedUserGuard implements CanActivate {
  constructor(private authSvc: FireauthService, private route:Router){}
  async canActivate(){
    const user = await this.authSvc.getUserAuth();
    if(user !== null){
      this.route.navigate(['/home']);
      return false;
    }
    return true;
  }
  
}
