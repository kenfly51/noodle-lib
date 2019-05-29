import {
  Directive,
  TemplateRef
} from '@angular/core';

@Directive({selector: 'ng-template[ngSideBarContent]'})
export class SideBarContent {
  constructor(public templateRef: TemplateRef<any>) {}
}
