import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common';
import { NoodleLibComponent } from './noodle-lib.component';
import { HeaderComponent } from './header/header.component';
import { NgHeaderLogo } from './header/header-logo.directive';
import { NgHeaderMenu } from './header/header-menu.directive';
import { NgHeaderProfile } from './header/header-profile.directive';

@NgModule({
  declarations: [
    NoodleLibComponent,
    HeaderComponent,
    NgHeaderMenu,
    NgHeaderLogo,
    NgHeaderProfile,
    NgHeaderLogo
  ],
  imports: [
    CommonModule
  ],
  exports: [
    NoodleLibComponent,
    HeaderComponent,
    NgHeaderMenu,
    NgHeaderLogo,
    NgHeaderProfile
  ]
})
export class NoodleLibModule { }
