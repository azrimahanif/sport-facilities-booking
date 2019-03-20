import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticationService } from '../services/authentication.service';
import { CanActivate } from '@angular/router/src/utils/preactivation';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements  CanActivate{
  path: ActivatedRouteSnapshot[];
  route: ActivatedRouteSnapshot;
  
  constructor(public auth: AuthenticationService) {}
 
  canActivate(): boolean {
    return this.auth.isAuthenticated();
}
}
