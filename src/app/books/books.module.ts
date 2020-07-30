// Modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';

// Components
import { BookAddComponent } from './components/book-add/book-add.component';
import { BookListComponent } from './components/book-list/book-list.component';
import { BookDetailComponent } from './components/book-detail/book-detail.component';

@NgModule({
  declarations: [ BookAddComponent, BookListComponent, BookDetailComponent ],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule
  ],
  exports: [
    BookListComponent,
    BookAddComponent
  ]
})
export class BooksModule { }
