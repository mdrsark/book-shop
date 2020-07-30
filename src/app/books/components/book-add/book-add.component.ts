import { Component, OnInit } from '@angular/core';
import { BookManagerService } from '../../services/book-manager.service';
import { IBookInfo } from '../../models/book.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-book-add',
  templateUrl: './book-add.component.html',
  styleUrls: ['./book-add.component.css']
})
export class BookAddComponent implements OnInit {

  name: string;
  author: string;
  imageURL: string;
  publicationYear: number;
  about: string;
  genre: string;
  editorial: string;

  constructor (private bookManagerService : BookManagerService,
    private router : Router) { 
  }

  ngOnInit (): void {
  }

  onSubmit () {
    const newBook : IBookInfo = {
      id: 'Book-id',
      imageURL: this.imageURL,
      name: this.name,
      author: this.author,
      details: {
        publicationYear: this.publicationYear || 0,
        about: this.about || '',
        genre: this.genre || '',
        editorial: this.editorial || ''
      }
    };
    
    this.bookManagerService.addNewBook(newBook);
    this.router.navigate(['']);
    
  }

}
