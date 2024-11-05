import { Injectable } from '@angular/core';
import { Credential, User, UserCredential } from '../../model/modelModule';
import { BehaviorSubject } from 'rxjs';
import { Encryptor, EncryptorFactory, EncryptorType } from '../../encryption/encryptionModule';
import { Session } from '../../model/session';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private isAuthenticatedSubject = new BehaviorSubject<boolean>(false);
  isAuthenticated$ = this.isAuthenticatedSubject.asObservable();
  key: string = 'NeuroIQ';
  encryptor: Encryptor = EncryptorFactory.getEncryptor(EncryptorType.Basic);
  
  constructor() {

  }

  isLoggedIn() : boolean {
    const session = this.getSession()
    return session !== null && session.expiration > new Date().getTime();
  }

  setSession() : void {
    sessionStorage.setItem(this.key, 
      this.encryptor.encrypt(
        JSON.stringify({
          token: this.key,
          expiration: this.configureExpiration(1)
        }
      )
    ))
  }

  getSession() : Session | null {
    const session = sessionStorage.getItem(this.key)
    if(session === null){
      return null;
    }
    const json = JSON.parse(this.encryptor.decrypt(session));
    return new Session()
            .setToken(json.token)
            .setExpiration(json.expiration);

  }

  configureExpiration(minutes: number) : number {
    const date = new Date();
    const minutesToAdd = 15;
    date.setMinutes(date.getMinutes() + minutesToAdd);
    return date.getTime();
  }
}
