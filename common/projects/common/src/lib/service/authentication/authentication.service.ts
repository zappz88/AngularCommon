import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private isAuthenticatedSubject = new BehaviorSubject<boolean>(false);
  isAuthenticated$ = this.isAuthenticatedSubject.asObservable();

  authenticate() {
    this.isAuthenticatedSubject.next(true);
  }

  hide() {
    this.isAuthenticatedSubject.next(false);
  }
}
