import { CanActivateFn } from '@angular/router';
import { AuthenticationService, StateService } from '../service/serviceModule';
import { Injectable } from '@angular/core';

export const authGuard: CanActivateFn = (route, state) => {
  const authenticationService: AuthenticationService = new AuthenticationService();
  return authenticationService.isLoggedIn();
};