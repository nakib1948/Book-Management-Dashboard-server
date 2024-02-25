import httpStatus from 'http-status';
import sendResponse from '../../utils/sendResponse';
import { cartServices } from './cart.services';
import catchAsync from '../../utils/catchAsync';

const addProductToCart = catchAsync(async (req, res) => {
  const result = await cartServices.addProductToCart(req.body);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Product added to cart succesfully',
    data: result,
  });
});

export const cartControllers = {
  addProductToCart,
};
