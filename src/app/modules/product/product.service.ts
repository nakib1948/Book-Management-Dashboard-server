import QueryBuilder from '../../builder/Querybuilder';
import { bookSearchableFields } from './product.constant';
import { TBook } from './product.interface';
import { Product } from './product.model';

const createBook = async (book: TBook) => {
  return await Product.create(book);
};

const getAllBooks = async (query: Record<string, unknown>) => {
  const bookQuery = new QueryBuilder(Product.find(), query)
    .search(bookSearchableFields)
    .filter()
    .sort()
    .paginate()
    .fields();
  const result = await bookQuery.modelQuery;
  const metaData = await bookQuery.countTotal();

  return {
    data: result,
    meta: metaData,
  };
};

const updateBookById = async (bookId: string, payload: Partial<TBook>) => {
  const result = await Product.findByIdAndUpdate({ _id: bookId }, payload, {
    new: true,
    runValidators: true,
  });
  return result;
};

const deleteBookById = async (BookId: string[]) => {
  const result = await Product.deleteMany({ _id: { $in: BookId } });
  return result;
};

export const productServices = {
  createBook,
  getAllBooks,
  deleteBookById,
  updateBookById,
};
