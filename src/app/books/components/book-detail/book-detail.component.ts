import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

// Model
import { IBookInfo, BooksCatalog } from '../../models/book.model';

// Services
import { BookManagerService } from '../../services/book-manager.service';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css']
})
export class BookDetailComponent implements OnInit {

  book : IBookInfo;
  
  constructor( private route : ActivatedRoute,
    private bookManagerService : BookManagerService ) {}
  
  ngOnInit(): void {
    this.route.paramMap.subscribe(( params : ParamMap ) => {
      const bookId = params.get('id');
      this.book = this.bookManagerService.getBookById(bookId);
    });
  }
}
