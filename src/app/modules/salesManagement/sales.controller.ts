import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { salesServices } from './sales.service';

const createSalesHistory = catchAsync(async (req, res) => {
  const result = await salesServices.createSalesHistory(req.body);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Sales information is added succesfully',
    data: result,
  });
});

const getAllSalesInformation = catchAsync(async (req, res) => {
  const {email} = req.params
  const result = await salesServices.getAllSalesInformation(email);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'sales history are retrieved successfully',
    data: result,
  });
});

export const salesControllers = {
  createSalesHistory,
  getAllSalesInformation,
};
