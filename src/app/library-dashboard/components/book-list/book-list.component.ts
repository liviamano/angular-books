import { Component, OnInit } from '@angular/core';
import { BookServiceService } from 'src/app/book-service.service';

import { Book } from '../../models/book.interface';
import { BOOKS } from '../../models/books-mock';

@Component({
    selector: 'book-list',
    templateUrl: './book-list.component.html',
    styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit {

    books: Book[];

    constructor(
        private bookService: BookServiceService
    ) { }

    ngOnInit() {
        this.books = this.getBooks();
    }

    getBooks(): Book[] {
        this.bookService.getBooks().subscribe(books => {
            this.books = books
            this.books.sort(
                function (a, b) {
                    return new Date(b.published).getTime() - new Date(a.published).getTime();
                }
            )
        })
        return this.books;
    }
}
