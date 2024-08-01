import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type bookDocument = HydratedDocument<Book>;

@Schema()
export class Book {
  @Prop()
  title: string;

  @Prop()
  author: string;

  @Prop()
  published: number;
}

export const BookSchema = SchemaFactory.createForClass(Book);
