import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { bookService } from './book.service';
import { Book } from './data/book.dto';

@Controller('/books')
export class BookController {
  constructor(private bookService: bookService) {}

  @Post()
  addBooks(@Body() book: Book): string {
    return this.bookService.addBook(book);
  }

  @Get()
  getAllBooks(): Book[] {
    return this.bookService.getAllBook();
  }

  @Put()
  updateBook(@Body() book: Book): string {
    return this.bookService.updateBook(book);
  }

  @Delete('/:id')
  deleteBook(@Param('id') bookId: string): string {
    return this.bookService.deleteBook(bookId);
  }
}
