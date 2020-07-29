import { Component, OnInit } from '@angular/core';
import { IBookInfo, BooksCatalog } from '../../models/book.model';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css']
})
export class BookDetailComponent implements OnInit {

  book : IBookInfo;
  catalog: Array<IBookInfo> = BooksCatalog;
  bookId : string = null;


  constructor( private route : ActivatedRoute ) {}
  
  ngOnInit(): void {
    this.route.paramMap.subscribe(( params : ParamMap ) => {
      this.bookId = params.get('id');
      this.getBookInformation(this.bookId);
    });
  }

  getBookInformation(bookId : string) {
    this.catalog.forEach(element => {
        if (element.id === bookId) {
          this.book = element;
        }
    });
  }
}
