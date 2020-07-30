import { Injectable } from '@angular/core';

// Model
import { IBookInfo, BooksCatalog } from '../models/book.model';

@Injectable({
  providedIn: 'root'
})
export class BookManagerService {

  booksCatalog : IBookInfo[] = BooksCatalog;

  constructor() { }

  getBooks () : IBookInfo[] {
    return this.booksCatalog;
  }

  addNewBook (newBook : IBookInfo) : void {
    this.booksCatalog = [ ...this.booksCatalog, newBook ];
  }

  removeBook (indexPosition: number) {
    this.booksCatalog = [
      ...this.booksCatalog.slice(0, indexPosition),
      ...this.booksCatalog.slice(indexPosition, this.booksCatalog.length)
    ];
  }

  getBookById(bookId : string) : IBookInfo {
    let book : IBookInfo = null;
    this.booksCatalog.forEach(element => {
        if (element.id === bookId) {
          book = element;
          return book;
        }
    });
    return book;
  }

}
