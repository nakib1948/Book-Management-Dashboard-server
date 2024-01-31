import { TUser } from './user.interface';
import { User } from './user.model';

const createUser = async (payload: TUser) => {
  return await User.create(payload);
};

export const UserServices = {
  createUser,
};
