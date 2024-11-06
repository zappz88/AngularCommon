import { CanActivateFn } from '@angular/router';
import { AuthenticationService, StateService } from '../service/serviceModule';
import { AppJsonConfigBase } from '../model/appJsonConfigBase';

export const authGuard: CanActivateFn = (route, state) => {
  const authenticationService: AuthenticationService = new AuthenticationService(new AppJsonConfigBase());
  return authenticationService.isLoggedIn();
};