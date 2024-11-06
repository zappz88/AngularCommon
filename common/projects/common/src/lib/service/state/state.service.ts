import { Injectable } from '@angular/core';
import { State, User, AppJsonConfig } from '../../model/modelModule';

@Injectable({
  providedIn: 'root'
})
export class StateService {

  state: State = new State();

  constructor() { }

  getAppJsonConfig() : AppJsonConfig | null {
    return this.state.appconfigjson;
  }

  setAppJsonConfig(json: any){
      this.state.appconfigjson = new AppJsonConfig(json);
  }

  getUser() : User | null {
    return this.state.user;
  }

  setUser(user : User) : void {
    this.state.user = user;
  }
}
