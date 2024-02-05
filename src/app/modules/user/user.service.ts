import httpStatus from 'http-status';
import AppError from '../../errors/AppError ';
import { TUser } from './user.interface';
import { User } from './user.model';
import config from '../../config';
import { createToken } from './user.utils';

const createUser = async (payload: TUser) => {
  return await User.create(payload);
};

const loginUser = async (payload: TUser) => {
  const user = await User.findOne({ email: payload.email });

  if (!user) {
    throw new AppError(httpStatus.NOT_FOUND, 'User not registered !');
  }

  if (user.password != payload.password)
    throw new AppError(httpStatus.FORBIDDEN, 'Password do not matched');

  const jwtPayload = {
    userName:user.name,
    userEmail: user.email,
  };

  const accessToken = createToken(
    jwtPayload,
    config.jwt_access_secret as string,
    config.jwt_access_expires_in as string,
  );

  return {
    accessToken,
  };
};

export const UserServices = {
  createUser,
  loginUser,
};
