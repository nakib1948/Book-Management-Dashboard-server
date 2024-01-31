
export type bookFormat = 'hardcover' | 'paperback' | 'e-book'

export type TProduct = {
    name: string;
    price: number;
    quantity: number;
    releaseDate: string;
    author:string;
    isbn: string;
    genre:string;
    publisher:string;
    series:string;
    language:string;
    format: bookFormat
};
  