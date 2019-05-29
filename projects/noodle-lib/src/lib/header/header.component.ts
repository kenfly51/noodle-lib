import {
  AfterContentChecked,
  Component,
  ContentChildren,
  Directive,
  Input,
  QueryList,
  TemplateRef
} from '@angular/core';

@Directive({selector: 'ng-template[ngHeaderMenu]'})
export class NgHeaderMenu {
  constructor(public templateRef: TemplateRef<any>) {}
}

@Directive({selector: 'ng-template[ngHeaderLogo]'})
export class NgHeaderLogo {
  constructor(public templateRef: TemplateRef<any>) {}
}

@Directive({selector: 'ng-template[ngHeaderProfile]'})
export class NgHeaderProfile {
  constructor(public templateRef: TemplateRef<any>) {}
}

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
