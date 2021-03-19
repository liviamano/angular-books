import { Component, OnInit } from '@angular/core';

import { Book } from '../../models/book.interface';
import { BOOKS } from '../../models/books-mock';

@Component({
    selector: 'book-list',
    templateUrl: './book-list.component.html',
    styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit {

    books: Book[];

    constructor() { }

    ngOnInit() {
        this.books = this.getBooks();
    }

    getBooks(): Book[] {
        return BOOKS.sort(
            function (a, b) {
                return new Date(b.published).getTime() - new Date(a.published).getTime();
            }
        );
    }
}
