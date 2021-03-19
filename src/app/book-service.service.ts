import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Book } from './library-dashboard/models/book.interface';
import { BOOKS } from './library-dashboard/models/books-mock';


@Injectable({
  providedIn: 'root'
})
export class BookServiceService {

  constructor() { }

  // Return list of books
  getBooks(): Observable<Book[]> {
    return of(BOOKS);
  }

  // Return single book
  getBook(isbn: string): Observable<Book> {
    return of(BOOKS.find(book => book.isbn === isbn));
  }
}
