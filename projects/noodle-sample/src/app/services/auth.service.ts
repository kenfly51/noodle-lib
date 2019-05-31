import { Injectable, EventEmitter } from '@angular/core';

@Injectable()
export class AuthService {
  loginStatus: boolean = false;
  username: string = '';
  password: string = '';
  statusChanged: EventEmitter<boolean> = new EventEmitter<boolean>();

  logIn(username: string, password: string) {
    // call api to authenticate user
    this.loginStatus = true;
    this.username = username;
    this.password = password;
    this.statusChanged.emit(this.loginStatus);
  }

  logOut(){
    this.loginStatus = false;
    this.statusChanged.emit(this.loginStatus);
  }

  getLoginStatus(): boolean {
    return this.loginStatus;
  }
}
