import { Injectable } from '@angular/core';
import { State, User } from '../../model/modelModule';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StateService {

  state: State = new State();
  private stateSubject = new BehaviorSubject<State>(this.state);
  state$ = this.stateSubject.asObservable();

  constructor() { }

  setState(val: State){
    this.stateSubject.next(val);
  }

  setUser(val: User){
    this.state.user = val;
    this.stateSubject.next(this.state);
  }

  setIsLoggedIn(val: boolean){
    this.state.isLoggedIn = val;
    this.stateSubject.next(this.state);
  }
}
