import {
  Directive,
  TemplateRef
} from '@angular/core';

@Directive({selector: 'ng-template[ngHeaderLogo]'})
export class NgHeaderLogo {
  constructor(public templateRef: TemplateRef<any>) {}
}
