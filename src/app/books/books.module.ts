import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookAddComponent } from './components/book-add/book-add.component';
import { BookListComponent } from './components/book-list/book-list.component';
import { SharedModule } from '../shared/shared.module';
import { BookDetailComponent } from './components/book-detail/book-detail.component';

@NgModule({
  declarations: [ BookAddComponent, BookListComponent, BookDetailComponent ],
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
