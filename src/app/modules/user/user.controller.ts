import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { UserServices } from './user.service';

const createUser = catchAsync(async (req, res) => {
  const result = await UserServices.createUser(req.body);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'User is created succesfully',
    data: result,
  });
});
const loginUser = catchAsync(async (req, res) => {
  const result = await UserServices.loginUser(req.body);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'User is logged in succesfully!',
    data: {
      token: result,
    },
  });
});
export const UserControllers = {
  createUser,
  loginUser,
};
