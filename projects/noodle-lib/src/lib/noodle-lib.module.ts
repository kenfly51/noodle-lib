import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common';
import { NoodleLibComponent } from './noodle-lib.component';
import { HeaderComponent, NgHeaderMenu, NgHeaderLogo, NgHeaderProfile } from './header/header.component';

@NgModule({
  declarations: [NoodleLibComponent, HeaderComponent, NgHeaderMenu, NgHeaderLogo, NgHeaderProfile],
  imports: [
    CommonModule
  ],
  exports: [NoodleLibComponent, HeaderComponent, NgHeaderMenu, NgHeaderLogo, NgHeaderProfile]
})
export class NoodleLibModule { }
