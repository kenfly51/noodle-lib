import {
  Directive,
  TemplateRef
} from '@angular/core';

@Directive({selector: 'ng-template[ngSideBarMenu]'})
export class SideBarMenu {
  constructor(public templateRef: TemplateRef<any>) {}
}
