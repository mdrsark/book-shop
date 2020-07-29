import { Component, OnInit } from '@angular/core';
import { IBookInfo, BooksCatalog } from '../../models/book.model';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css'],
})
export class BookListComponent implements OnInit {

  books: Array<IBookInfo> = BooksCatalog;

  constructor() { }

  ngOnInit(): void {
  }

}
