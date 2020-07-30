import { Component, OnInit } from '@angular/core';
import { IBookInfo } from '../../models/book.model';
import { BookManagerService } from '../../services/book-manager.service';


@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css'],
})
export class BookListComponent implements OnInit {

  
  books: Array<IBookInfo> = this.bookManagerService.getBooks();

  constructor(private bookManagerService : BookManagerService) { }

  ngOnInit(): void {
    
  }

}
