import { Injectable } from '@nestjs/common';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Book } from './schema/book';
import { Model } from 'mongoose';

@Injectable()
export class BookService {
  constructor(@InjectModel(Book.name) private bookModel: Model<Book>) {}

  async create(createBookDto: CreateBookDto) {
    const books = new this.bookModel(createBookDto);
    return books.save();
  }

  async findAll() {
    return this.bookModel.find().exec();
  }

  async findOne(id: string) {
    return this.bookModel.findById(id);
  }

  async update(id: string, updateBookDto: UpdateBookDto) {
    return this.bookModel
      .updateOne({ _id: id }, updateBookDto, { new: true })
      .exec();
  }

  remove(id: string) {
    return this.bookModel.deleteOne({ _id: id });
  }
}
