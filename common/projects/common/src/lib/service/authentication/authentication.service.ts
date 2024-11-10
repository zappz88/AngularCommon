import { Inject, Injectable, InjectionToken } from '@angular/core';
import { ActivatedRouteSnapshot, GuardResult, MaybeAsync, RouterStateSnapshot } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { Credential, User, UserCredential, Session, AppJsonConfigBase } from '../../model/modelModule';
import { Encryptor, EncryptorFactory, EncryptorType } from '../../encryption/encryptionModule';
import { HttpClient } from '@angular/common/http';
import { StateService } from '../serviceModule';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  key: string = 'NeuroIQ';
  encryptor: Encryptor | null = null;
  appjsonconfig: AppJsonConfigBase | any;


  constructor(
    private appJsonConfig: AppJsonConfigBase,
    private stateService: StateService
  ) {
    this.encryptor = EncryptorFactory.getEncryptorByString(this.appJsonConfig.encryptor);
  }

  isLoggedIn() : boolean {
    const session = this.getSession()
    return session !== null && session.expiration > new Date().getTime();
  }

  setSession() : void {
    if(this.encryptor){
      localStorage.setItem(this.key, 
        this.encryptor.encrypt(
          JSON.stringify({
            token: this.key,
            expiration: this.configureSessionExpirationMinutes(this.appJsonConfig.sessionTimeout),
            isLoggedIn: this.stateService.state.isLoggedIn
          }
        )
      ))
    }
    else{
      throw new Error("Encryptor not implemented exception.");
    }
  }

  getSession() : Session | null {
    if(this.encryptor){
      const session = localStorage.getItem(this.key)
      if(session === null){
        return null;
      }
      const json = JSON.parse(this.encryptor.decrypt(session));
      return new Session()
              .setToken(json.token)
              .setExpiration(json.expiration)
              .setIsLoggedIn(json.isLoggedIn);
    }
    else{
      throw new Error("Encryptor not implemented exception.");
    }
  }

  deleteSession() : void {
    if(this.encryptor){
      localStorage.removeItem(this.key)
    }
    else{
      throw new Error("Encryptor not implemented exception.");
    }
  }

  configureSessionExpirationMinutes(minutes: number) : number {
    const date = new Date();
    date.setMinutes(date.getMinutes() + minutes);
    return date.getTime();
  }
}
