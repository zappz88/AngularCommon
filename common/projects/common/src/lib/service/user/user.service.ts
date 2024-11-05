import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { 
  User,
  Credential,
  UserCredential,
  JsonPayload,
  AppConfigJson 
} from '../../model/modelModule';
import { 
  Encryptor, 
  EncryptorFactory, 
  EncryptorType 
} from '../../encryption/encryptionModule';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  appconfig: AppConfigJson = new AppConfigJson();
  uri: string = this.appconfig.userServiceUri;
  encryptor: Encryptor = EncryptorFactory.getEncryptor(EncryptorType.Basic);

  constructor(private httpClient: HttpClient) { 

  }

  getUserByCredentials(username: string, password: string) : Observable<User>{
    const json = new JsonPayload(this.encryptor.encrypt(JSON.stringify({username: username, password: password})));
    return this.httpClient.post<User>(`${this.uri}/GetUserByCredentials`, json);
  }

  getUserByCredential(credential: Credential) : Observable<User>{
    const json = new JsonPayload(this.encryptor.encrypt(JSON.stringify(credential)));
    return this.httpClient.post<User>(`${this.uri}/GetUserByCredential`, json);
  }

  getUserByUserCredential(userCredential: UserCredential) : Observable<User>{
    const json = new JsonPayload(this.encryptor.encrypt(JSON.stringify(userCredential)));
    return this.httpClient.post<User>(`${this.uri}/GetUserByCredential`, json);
  }

  getUserIDByCredentials(username: string, password: string) : Observable<User>{
    const json = new JsonPayload(this.encryptor.encrypt(JSON.stringify({username: username, password: password})));
    return this.httpClient.post<User>(`${this.uri}/GetUserIDByCredentials`, json);
  }

  getUserIDByCredential(credential: Credential) : Observable<number>{
    const json = new JsonPayload(this.encryptor.encrypt(JSON.stringify(credential)));
    return this.httpClient.post<number>(`${this.uri}/GetUserIDByCredential`, json);
  }

  getUserIDByUserCredential(userCredential: UserCredential) : Observable<number>{
    const json = new JsonPayload(this.encryptor.encrypt(JSON.stringify(userCredential)));
    return this.httpClient.post<number>(`${this.uri}/GetUserIDByUserCredential`, json);
  }

  insertUser(user: User) : Observable<User>{
    const json = new JsonPayload(this.encryptor.encrypt(JSON.stringify(user)));
    return this.httpClient.post<User>(`${this.uri}/InsertUser`, json);
  }

  updateUser(user: User) : Observable<User>{
    const json = new JsonPayload(this.encryptor.encrypt(JSON.stringify(user)));
    return this.httpClient.post<User>(`${this.uri}/UpdateUser`, json);
  }

  deleteUser(user: User) : Observable<User>{
    const json = new JsonPayload(this.encryptor.encrypt(JSON.stringify(user)));
    return this.httpClient.post<User>(`${this.uri}/DeleteUser`, json);
  }
}
