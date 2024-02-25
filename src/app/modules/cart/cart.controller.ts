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

const getcartInformation = catchAsync(async (req, res) => {
  const { userEmail } = req.params;
  const result = await cartServices.getcartInformation(userEmail);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'cart information are retrieved successfully',
    data: result,
  });
});
const quantityUpdate = catchAsync(async (req, res) => {
    const result = await cartServices.quantityUpdate(req.body);
  
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Product quantity is updated successfully',
      data: result,
    });
  });
export const cartControllers = {
  addProductToCart,
  getcartInformation,
  quantityUpdate,
};
