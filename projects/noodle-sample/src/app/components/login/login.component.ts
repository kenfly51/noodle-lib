import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

import { AuthService } from "../../services/auth.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router, private authService: AuthService) {}

  submitted: boolean = false;

  loggingIn: boolean = false;

  username: string = 'admin';

  password: string = 'admin';

  onLogin($event) {
    this.submitted = true;
    this.loggingIn = true;

    const { username, password } = $event;

    this.authService.logIn(username, password);
  }

  ngOnInit() {
  }

}
