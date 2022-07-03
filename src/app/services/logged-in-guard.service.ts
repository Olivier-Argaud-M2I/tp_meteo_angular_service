import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanDeactivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UserLoginService } from './user-login.service';

@Injectable({
  providedIn: 'root'
})
export class LoggedInGuardService implements CanActivate,CanDeactivate<any>{

  constructor(private log:UserLoginService,private router:Router) { }

  
  canDeactivate(component: any, currentRoute: ActivatedRouteSnapshot, currentState: RouterStateSnapshot, nextState?: RouterStateSnapshot | undefined): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    // return this.log.isLogged || this.router.parseUrl('/login'); // genere un bug car ne peux pas sortir de formulaire 3 mais veux rediriger vers login
    // return this.log.isLogged || this.router.parseUrl('/formulaire3'); // redirection inutile car deja sur formulaire 3
    return this.log.isLogged;
  }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    return this.log.isLogged || this.router.parseUrl('/login');
  }

}
