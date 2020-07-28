import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from '../app.component';
import { ActionIconComponent } from './components/action-icon/action-icon.component';
import { HeaderComponent } from './components/header/header.component';

@NgModule({
    declarations: [ AppComponent],
    imports: [
      CommonModule,
      HeaderComponent,
      ActionIconComponent
    ],
    exports: [ HeaderComponent, ActionIconComponent ],
  })
  export class SharedModule { }