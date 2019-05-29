import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NoodleLibComponent } from './noodle-lib.component';
import { HeaderComponent } from './header/header.component';
import { NgHeaderLogo } from './header/header-logo.directive';
import { NgHeaderMenu } from './header/header-menu.directive';
import { NgHeaderProfile } from './header/header-profile.directive';
import { SideBarContainerComponent } from './side-bar/side-bar-container.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { SideBarMenu } from './side-bar/side-bar-menu.directive';
import { SideBarContent } from './side-bar/side-bar-content.directive';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    NoodleLibComponent,
    HeaderComponent,
    NgHeaderMenu,
    NgHeaderLogo,
    NgHeaderProfile,
    SideBarContainerComponent,
    SideBarComponent,
    SideBarMenu,
    SideBarContent,
    FooterComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    NoodleLibComponent,
    HeaderComponent,
    NgHeaderMenu,
    NgHeaderLogo,
    NgHeaderProfile,
    SideBarContainerComponent,
    SideBarComponent,
    SideBarMenu,
    SideBarContent,
    FooterComponent,
    LoginComponent
  ]
})
export class NoodleLibModule { }
