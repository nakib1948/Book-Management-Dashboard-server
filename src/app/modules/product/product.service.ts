import { TBook } from "./product.interface";
import { Product } from "./product.model";


const createBook = async(book:TBook)=>{
    return await Product.create(book)
}

export const productServices = {
    createBook
  };
  