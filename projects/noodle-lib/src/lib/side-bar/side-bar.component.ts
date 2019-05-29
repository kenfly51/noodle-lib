import {
  AfterContentChecked,
  Component,
  ContentChild
} from '@angular/core';
import { SideBarMenu } from './side-bar-menu.directive';
import { SideBarContent } from './side-bar-content.directive';

@Component({
  selector: 'noodle-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent implements AfterContentChecked {

  @ContentChild(SideBarMenu) sideBarMenu: SideBarMenu;
  @ContentChild(SideBarContent) sideBarContent: SideBarContent;

  constructor() { }

  ngAfterContentChecked() {
  }

}
