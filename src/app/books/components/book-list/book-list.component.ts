import { Component, OnInit } from '@angular/core';
import { IBookInfo } from '../../models/book.model';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css'],
})
export class BookListComponent implements OnInit {

  books: Array<IBookInfo> = [
    {
      imageURL: '../../../../assets/img/arrivals.jpg',
      name: 'The Arrivals',
      author: 'Lucas Yolld'
    },
    {
      imageURL: '../../../../assets/img/canciones.jpg',
      name: 'Fuimos Canciones',
      author: 'Elísabet Benavent'
    },
    {
      imageURL: '../../../../assets/img/cultura.jpg',
      name: 'El día que se perdió la cultura',
      author: 'Javier Castillo'
    },
    {
      imageURL: '../../../../assets/img/dracula.jpg',
      name: 'Dracula',
      author: 'Bram Stoker'
    },
    {
      imageURL: '../../../../assets/img/odesa.jpg',
      name: 'Ordesa',
      author: 'Manuel Vila'
    },
    {
      imageURL: '../../../../assets/img/grimorio.jpg',
      name: 'Grimorio 13',
      author: 'Alvaro Aparicio'
    },
    {
      imageURL: '../../../../assets/img/hobbit.jpg',
      name: 'The Hobbit',
      author: 'J.R.R Tolkein'
    },
    {
      imageURL: '../../../../assets/img/norte.jpg',
      name: 'Los Hombres del Norte',
      author: 'John Haywood'
    },
    {
      imageURL: '../../../../assets/img/surviving.jpg',
      name: 'Surviving the ABYSS',
      author: 'Lola Sutton'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
