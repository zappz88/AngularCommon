import { Injectable } from '@angular/core';
import { State, User } from '../../model/modelModule';

@Injectable({
  providedIn: 'root'
})
export class StateService {

  state: State | null = new State();

  constructor() { }

  getUser() : User | null | undefined {
    return this.state?.user;
  }

  setUser(user : User) : void {
    this.state?.setUser(user);
  }
}
