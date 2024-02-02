import { NextFunction, Request, Response } from 'express';
import httpStatus from 'http-status';
import jwt, { JwtPayload } from 'jsonwebtoken';
import config from '../config';
import { User } from '../modules/user/user.model';
import catchAsync from '../utils/catchAsync';
import AppError from '../errors/AppError ';

const auth = () => {
  return catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    const token = req.headers.authorization;

    if (!token) {
      throw new AppError(httpStatus.UNAUTHORIZED, 'Unauthorized access!');
    }

    let decoded;

    try {
      decoded = jwt.verify(
        token,
        config.jwt_access_secret as string,
      ) as JwtPayload;
    } catch (err) {
      throw new AppError(httpStatus.UNAUTHORIZED, 'Unauthorized access');
    }

    const { userEmail } = decoded;

    const user = await User.findOne({email:userEmail});

    if (!user) {
      throw new AppError(httpStatus.NOT_FOUND, 'This user is not found !');
    }
    next();
  });
};

export default auth;
