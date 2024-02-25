export type bookFormat = 'hardcover' | 'paperback' | 'e-book';

export type TBook = {
  name: string;
  price: number;
  quantity: number;
  imageurl: string;
  releaseDate: string;
  author: string;
  isbn: string;
  genre: string;
  publisher: string;
  series: string;
  language: string;
  format: bookFormat;
  userEmail:string;
};
