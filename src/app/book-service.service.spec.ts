import { TestBed } from '@angular/core/testing';

import { BookServiceService } from './book-service.service';

describe('BookServiceService', () => {
  let service: BookServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BookServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  let expectedBook = {
    'title': 'To bee or not to bee',
    'author': 'Maja Beesworth',
    'numPages': 111,
    'isbn': '101-110-111',
    'img': '/assets/images/101-110-111.jpg',
    'summary': 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.',
    'rating': 5,
    'published': '2015-07-01'
  }

  it('should return correct book',
    (done: DoneFn) => {
      service.getBook('101-110-111').subscribe(value => {
        expect(value).toEqual(expectedBook);
        done();
      });
    });
});
