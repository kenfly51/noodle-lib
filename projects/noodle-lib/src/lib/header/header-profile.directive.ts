import {
  Directive,
  TemplateRef
} from '@angular/core';

@Directive({selector: 'ng-template[ngHeaderProfile]'})
export class NgHeaderProfile {
  constructor(public templateRef: TemplateRef<any>) {}
}
