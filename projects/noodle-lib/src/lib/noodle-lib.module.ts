import { NgModule } from '@angular/core';
import { NoodleLibComponent } from './noodle-lib.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [NoodleLibComponent, HeaderComponent],
  imports: [
  ],
  exports: [NoodleLibComponent, HeaderComponent]
})
export class NoodleLibModule { }
