import { Component, OnInit } from '@angular/core';
import { IBookInfo } from '../../models/book.model';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

  books: Array<IBookInfo> = [
    {
      imageURL: 'http://something.com',
      name: 'Cien años de Soledad',
      author: 'Gabriel García Marquéz'
    },
    {
      imageURL: 'http://something.com',
      name: 'Cien años de Soledad',
      author: 'Gabriel García Marquéz'
    },
    {
      imageURL: 'http://something.com',
      name: 'Cien años de Soledad',
      author: 'Gabriel García Marquéz'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
