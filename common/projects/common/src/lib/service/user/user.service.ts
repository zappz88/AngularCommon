import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
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

  getUserByCredentials(username: string, password: string) : Observable<User>{
    if(this.encryptor){
      const json = new JsonPayload(this.encryptor.encrypt(JSON.stringify({username: username, password: password})));
      return this.httpClient.post<User>(`${this.uri}/GetUserByCredentials`, json);
    }
    else{
      throw new Error("Encryptor not implemented exception.");
    }
  }

  getUserByCredential(credential: Credential) : Observable<User>{
    if(this.encryptor){
      const json = new JsonPayload(this.encryptor.encrypt(JSON.stringify(credential)));
      return this.httpClient.post<User>(`${this.uri}/GetUserByCredential`, json);
    }
    else{
      throw new Error("Encryptor not implemented exception.");
    }
  }

  getUserByUserCredential(userCredential: UserCredential) : Observable<User>{
    if(this.encryptor){
      const json = new JsonPayload(this.encryptor.encrypt(JSON.stringify(userCredential)));
      return this.httpClient.post<User>(`${this.uri}/GetUserByCredential`, json);
    }
    else{
      throw new Error("Encryptor not implemented exception.");
    }
  }

  getUserIDByCredentials(username: string, password: string) : Observable<User>{
    if(this.encryptor){
      const json = new JsonPayload(this.encryptor.encrypt(JSON.stringify({username: username, password: password})));
      return this.httpClient.post<User>(`${this.uri}/GetUserIDByCredentials`, json);
    }
    else{
      throw new Error("Encryptor not implemented exception.");
    }
  }

  getUserIDByCredential(credential: Credential) : Observable<number>{
    if(this.encryptor){
      const json = new JsonPayload(this.encryptor.encrypt(JSON.stringify(credential)));
      return this.httpClient.post<number>(`${this.uri}/GetUserIDByCredential`, json);
    }
    else{
      throw new Error("Encryptor not implemented exception.");
    }
  }

  getUserIDByUserCredential(userCredential: UserCredential) : Observable<number>{
    if(this.encryptor){
      const json = new JsonPayload(this.encryptor.encrypt(JSON.stringify(userCredential)));
      return this.httpClient.post<number>(`${this.uri}/GetUserIDByUserCredential`, json);
    }
    else{
      throw new Error("Encryptor not implemented exception.");
    }
  }

  insertUser(user: User) : Observable<User>{
    if(this.encryptor){
      console.log(this.encryptor.encrypt(JSON.stringify(user)));
      const json = new JsonPayload(this.encryptor.encrypt(JSON.stringify(user)));
      return this.httpClient.post<User>(`${this.uri}/InsertUser`, json);
    }
    else{
      throw new Error("Encryptor not implemented exception.");
    }
  }

  updateUser(user: User) : Observable<User>{
    if(this.encryptor){
      const json = new JsonPayload(this.encryptor.encrypt(JSON.stringify(user)));
      return this.httpClient.post<User>(`${this.uri}/UpdateUser`, json);
    }
    else{
      throw new Error("Encryptor not implemented exception.");
    }
  }

  deleteUser(user: User) : Observable<User>{
    if(this.encryptor){
      const json = new JsonPayload(this.encryptor.encrypt(JSON.stringify(user)));
      return this.httpClient.post<User>(`${this.uri}/DeleteUser`, json);
    }
    else{
      throw new Error("Encryptor not implemented exception.");
    }
  }
}
