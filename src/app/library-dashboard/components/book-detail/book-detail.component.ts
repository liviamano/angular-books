import { Component, Input } from '@angular/core';
import { BookServiceService } from 'src/app/book-service.service';
import { Book } from '../../models/book.interface';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.scss']
})
export class BookDetailComponent {

  @Input() book: Book;

  constructor(
    private bookService: BookServiceService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.getBook();
  }

  getBook() {
    let isbn = this.route.snapshot.paramMap.get('isbn');
    console.log(isbn);
    this.bookService.getBook(isbn).subscribe(book => this.book = book);
  }
}