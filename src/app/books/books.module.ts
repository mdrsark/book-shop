import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookAddComponent } from './components/book-add/book-add.component';
import { BookListComponent } from './components/book-list/book-list.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [ BookAddComponent, BookListComponent ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    BookListComponent,
    BookAddComponent
  ]
})
export class BooksModule { }
