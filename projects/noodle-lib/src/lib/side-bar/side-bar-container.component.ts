import { Component, AfterContentChecked, ContentChild } from '@angular/core';
import { SideBarComponent } from './side-bar.component';
import { SideBarMenu } from './side-bar-menu.directive';

@Component({
  selector: 'noodle-side-bar-container',
  templateUrl: './side-bar-container.component.html',
  styleUrls: ['./side-bar-container.component.scss']
})
export class SideBarContainerComponent implements AfterContentChecked {

  @ContentChild(SideBarComponent) sideBar: SideBarComponent

  menuTemplate: SideBarMenu | null;

  status: boolean = false;

  constructor() { }

  toggleSidebar() {
    this.status = !this.status;
  }

  ngAfterContentChecked() {
  }

}
