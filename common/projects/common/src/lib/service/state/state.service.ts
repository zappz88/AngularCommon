import { Injectable } from '@angular/core';
import { State, User } from '../../model/modelModule';

@Injectable({
  providedIn: 'root'
})
export class StateService {

  state: State = new State();

  constructor() { }

  getUser() : User | null {
    return this.state.user;
  }

  setUser(user : User) : void {
    this.state.user = user;
  }
}
