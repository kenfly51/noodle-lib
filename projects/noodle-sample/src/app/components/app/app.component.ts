import { Component, ViewChild, AfterViewInit, OnInit } from '@angular/core';
import { Router } from "@angular/router";

import { SideBarContainerComponent } from 'noodle-lib';

import { AuthService } from "../../services/auth.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit {
  @ViewChild(SideBarContainerComponent) sideBar: SideBarContainerComponent

  constructor(private router: Router, private authService: AuthService) {

  }

  toggleSidebar() {
    this.sideBar.toggleSidebar();
  }

  checkLoginStatus(isLoggedIn) {
    if(!isLoggedIn) {
      this.router.navigate(['login'])
    } else {
      this.router.navigate(['home'])
    }
  }

  ngOnInit() {
    this.authService.statusChanged.subscribe(
      (isLoggedIn) => {
        this.checkLoginStatus(isLoggedIn)
      }
    );
  }

  ngAfterViewInit() {
    const isLoggedIn = this.authService.getLoginStatus();
    this.checkLoginStatus(isLoggedIn)
  }
}
