import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, GuardResult, MaybeAsync, RouterStateSnapshot } from '@angular/router';
import { AuthenticationService } from '../serviceModule';

@Injectable({
  providedIn: 'root'
})
export class AuthguardLoginService implements CanActivate {

  constructor(
    private authenticationService: AuthenticationService
  ) { }
  
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): MaybeAsync<GuardResult> {
    return !this.authenticationService.isLoggedIn();
  }
}
