import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { productServices } from './product.service';

const createBook = catchAsync(async (req, res) => {
  const result = await productServices.createBook(req.body);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Book added succesfully',
    data: result,
  });
});
const getAllProducts = catchAsync(async (req, res) => {
  const result = await productServices.getAllBooks(req.query);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Products are retrieved successfully',
    meta: result.meta,
    data: result.data,
  });
});

const updateProductById = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await productServices.updateBookById(id, req.body);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Product is updated successfully',
    data: result,
  });
});

const deleteProductById = catchAsync(async (req, res) => {
  const id = req.body;
  const result = await productServices.deleteBookById(id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Products are deleted successfully',
    data: result && null,
  });
});
export const productControllers = {
  createBook,
  getAllProducts,
  updateProductById,
  deleteProductById,
};
