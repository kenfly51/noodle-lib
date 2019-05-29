import {
  AfterContentChecked,
  Component,
  ContentChildren,
  Directive,
  Input,
  QueryList,
  TemplateRef
} from '@angular/core';
import { NgHeaderLogo } from './header-logo.directive';
import { NgHeaderMenu } from './header-menu.directive';
import { NgHeaderProfile } from './header-profile.directive';


@Component({
  selector: 'noodle-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements AfterContentChecked {
  @ContentChildren(NgHeaderMenu) menus: QueryList<NgHeaderMenu>;
  @ContentChildren(NgHeaderLogo) logos: QueryList<NgHeaderLogo>;
  @ContentChildren(NgHeaderProfile) profiles: QueryList<NgHeaderProfile>;

  menuTemplate: NgHeaderMenu | null;
  logoTemplate: NgHeaderLogo | null;
  profileTemplate: NgHeaderProfile | null;

  ngAfterContentChecked() {
    this.menuTemplate = this.menus.first;
    this.logoTemplate = this.logos.first;
    this.profileTemplate = this.profiles.first;
  }

}
