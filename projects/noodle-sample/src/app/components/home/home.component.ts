import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { SideBarContainerComponent } from 'noodle-lib';
import { AuthService } from "../../services/auth.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements AfterViewInit {
  @ViewChild(SideBarContainerComponent) sideBar: SideBarContainerComponent

  constructor(private authService: AuthService) {

  }

  toggleSidebar() {
    this.sideBar.toggleSidebar();
  }

  logOut($event) {
    this.authService.logOut();
  }

  ngAfterViewInit() {
  }
}
