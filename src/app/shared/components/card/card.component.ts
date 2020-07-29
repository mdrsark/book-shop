import { Component, OnInit, Input } from '@angular/core';
import { IBookInfo } from '../../../books/models/book.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() bookItem: IBookInfo;
  @Input() pathUrl: string;

  constructor( private router : Router) { }

  ngOnInit(): void {
  }

  onClick(path) {   
    this.router.navigate([ 'details', path ]);
  }

}
