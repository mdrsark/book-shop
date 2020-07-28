import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActionIconComponent } from './components/action-icon/action-icon.component';
import { HeaderComponent } from './components/header/header.component';
import { CardComponent } from './components/card/card.component';
import { ContainerComponent } from './components/container/container.component';

@NgModule({
    declarations: [ HeaderComponent, ActionIconComponent, CardComponent, ContainerComponent ],
    imports: [
      CommonModule
    ],
    exports: [ HeaderComponent, ActionIconComponent, CardComponent, ContainerComponent ]
  })
  export class SharedModule { }