import { Book } from './data/book.dto';
import { v4 as uuid } from 'uuid';

export class bookService {
  public books: Book[] = [];

  // add Books
  addBook(book: Book): string {
    book.id = uuid();
    this.books.push(book);
    return `Book added successfully`;
  }

  // get All Book
  getAllBook(): Book[] {
    return this.books;
  }

  // update book
  updateBook(book: Book): string {
    const bookIndex = this.books.findIndex((bookId) => {
      return bookId.id === book.id;
    });
    this.books[bookIndex] = book;
    return `Book has been updated`;
  }

  // delete book
  deleteBook(bookId: string): string {
    this.books = this.books.filter((book) => {
      return book.id !== bookId;
    });
    return `Book has been deleted`;
  }
}
