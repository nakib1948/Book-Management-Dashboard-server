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

export const productControllers = {
  createBook
};
