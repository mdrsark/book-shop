import { Component, OnInit, Input } from '@angular/core';
import { IBookInfo } from '../../../books/models/book.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() bookItem: IBookInfo;

  constructor() { }

  ngOnInit(): void {
  }

}
