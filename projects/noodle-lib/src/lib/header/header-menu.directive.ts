import {
  Directive,
  TemplateRef
} from '@angular/core';

@Directive({selector: 'ng-template[ngHeaderMenu]'})
export class NgHeaderMenu {
  constructor(public templateRef: TemplateRef<any>) {}
}
