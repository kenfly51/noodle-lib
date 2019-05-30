import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { SideBarContainerComponent } from 'noodle-lib';

class MenuItem {
  public label: string;
  public link: string;
  public active: boolean;

  constructor(label: string, link: string, active: boolean = false) {
    this.label = label;
    this.link = link;
    this.active = active;
  }
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  @ViewChild(SideBarContainerComponent) sideBar: SideBarContainerComponent

  menus: MenuItem[];

  loggedIn: boolean = false;

  submitted: boolean = false;

  loggingIn: boolean = false;

  toggleSidebar() {
    this.sideBar.toggleSidebar();
  }

  onLogin($event) {
    this.submitted = true;
    this.loggingIn = true;

    // call login api from server
    console.log($event)

    this.loggedIn = true;
  }

  constructor(){
    this.menus = [
      new MenuItem('Home', '/'),
      new MenuItem('Docs', '/Docs'),
      new MenuItem('Blog', '/Blog')
    ];
  }

  ngAfterViewInit() {
  }
}
