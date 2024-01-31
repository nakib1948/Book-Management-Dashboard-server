import { Schema, model } from 'mongoose';
import { TBook } from './product.interface';
import { bookformat } from './product.constant';

const productSchema = new Schema<TBook>(
  {
    name: {
      type: String,
      require: true,
      unique: true,
    },
    price: {
      type: Number,
      require: true,
    },
    quantity: {
      type: Number,
      require: true,
    },
    imageurl: {
      type: String,
      require: true,
    },
    releaseDate: {
      type: String,
      require: true,
    },
    author: {
      type: String,
      require: true,
    },
    isbn: {
      type: String,
      require: true,
    },
    genre: {
      type: String,
      require: true,
    },
    publisher: {
      type: String,
      require: true,
    },
    series: {
      type: String,
      require: true,
    },
    language: {
      type: String,
      require: true,
    },
    format: {
      type: String,
      require: true,
      enum: bookformat,
    },
  },
  {
    timestamps: true,
  },
);

export const Product = model<TBook>('Product', productSchema);
