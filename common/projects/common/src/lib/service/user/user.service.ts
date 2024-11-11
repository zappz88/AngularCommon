import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, Observable, tap } from 'rxjs';
import { 
  User,
  Credential,
  UserCredential,
  JsonPayload,
  AppJsonConfigBase 
} from '../../model/modelModule';
import { 
  Encryptor, 
  EncryptorFactory, 
  EncryptorType 
} from '../../encryption/encryptionModule';
import { StateService } from '../serviceModule';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  uri: string | null = null;
  encryptor: Encryptor | null = null;

  constructor(
    private httpClient: HttpClient,
    private appjsonconfig: AppJsonConfigBase
  ) { 
      this.uri = this.appjsonconfig.userServiceUri;
      this.encryptor = EncryptorFactory.getEncryptorByString(this.appjsonconfig.encryptor);
  }

  getUserByCredentials(username: string, password: string) : Observable<User> {
    const json = new JsonPayload(this.stringifyAndEncryptJson({username: username, password: password}));
    return this.httpClient.post<JsonPayload>(`${this.uri}/GetUserByCredentials`, json)
           .pipe(map((response) => this.decryptAndParseJson(response.data)));
  }

  getUserByCredential(credential: Credential) : Observable<User>{
    const json = new JsonPayload(this.stringifyAndEncryptJson(credential));
    return this.httpClient.post<JsonPayload>(`${this.uri}/GetUserByCredential`, json)
           .pipe(map((response) => this.decryptAndParseJson(response.data)));
  }

  getUserByUserCredential(userCredential: UserCredential) : Observable<User>{
    const json = new JsonPayload(this.stringifyAndEncryptJson(userCredential));
    return this.httpClient.post<JsonPayload>(`${this.uri}/GetUserByUserCredential`, json)
           .pipe(map((response) => this.decryptAndParseJson(response.data)));
  }

  getUserIDByCredentials(username: string, password: string) : Observable<number>{
    const json = new JsonPayload(this.stringifyAndEncryptJson({username: username, password: password}));
    return this.httpClient.post<JsonPayload>(`${this.uri}/GetUserIDByCredentials`, json)
           .pipe(map((response) => this.decryptAndParseJson(response.data)));
  }

  getUserIDByCredential(credential: Credential) : Observable<number>{
    const json = new JsonPayload(this.stringifyAndEncryptJson(credential));
    return this.httpClient.post<JsonPayload>(`${this.uri}/GetUserIDByCredential`, json)
           .pipe(map((response) => this.decryptAndParseJson(response.data)));
  }

  getUserIDByUserCredential(userCredential: UserCredential) : Observable<number>{
    const json = new JsonPayload(this.stringifyAndEncryptJson(userCredential));
    return this.httpClient.post<JsonPayload>(`${this.uri}/GetUserIDByUserCredential`, json)
           .pipe(map((response) => this.decryptAndParseJson(response.data)));
  }

  insertUser(user: User) : Observable<User>{
    const json = new JsonPayload(this.stringifyAndEncryptJson(user));
    return this.httpClient.post<JsonPayload>(`${this.uri}/InsertUser`, json)
           .pipe(map((response) => this.decryptAndParseJson(response.data)));
  }

  updateUser(user: User) : Observable<number>{
    const json = new JsonPayload(this.stringifyAndEncryptJson(user));
    return this.httpClient.post<JsonPayload>(`${this.uri}/UpdateUser`, json)
           .pipe(map((response) => this.decryptAndParseJson(response.data)));
  }

  deleteUser(user: User) : Observable<number>{
    const json = new JsonPayload(this.stringifyAndEncryptJson(user));
    return this.httpClient.post<JsonPayload>(`${this.uri}/DeleteUser`, json)
           .pipe(map((response) => this.decryptAndParseJson(response.data)));
  }

  stringifyAndEncryptJson(val: any){
    if(this.encryptor){
      return this.encryptor.encrypt(JSON.stringify(val));
    }
    else{
      throw new Error("Encryptor not implemented exception.");
    }
  }

  decryptAndParseJson(val: any){
    if(this.encryptor){
      return JSON.parse(this.encryptor.decrypt(val));
    }
    else{
      throw new Error("Encryptor not implemented exception.");
    }
  }
}
