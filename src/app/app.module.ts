import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ContainerComponent } from './components/container/container.component';
import { ActionIconComponent } from './shared/components/action-icon/action-icon.component';
import { CardComponent } from './components/card/card.component';
import { ListComponent } from './components/list/list.component';
import { HeaderComponent } from './shared/components/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContainerComponent,
    CardComponent,
    ListComponent,
    ActionIconComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
