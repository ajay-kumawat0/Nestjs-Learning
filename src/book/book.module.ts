import { Module } from '@nestjs/common';
import { bookService } from './book.service';
import { BookController } from './book.controller';

@Module({
  imports: [],
  controllers: [BookController],
  providers: [bookService],
  exports: [],
})
export class bookModule {}
