import httpStatus from 'http-status';
import AppError from '../../errors/AppError ';
import { TCart } from './cart.interface';
import { Cart } from './cart.model';

const addProductToCart = async (product: TCart) => {
  const res = await Cart.findOne({ productId: product.productId });
  if(res?.userEmail === product.userEmail){
    throw new AppError(httpStatus.CONFLICT,"product already exists on cart")
  }
  return await Cart.create(product);
};

const getcartInformation =async (email) => {
    return await Cart.find({userEmail:email}) ;
}

export const cartServices = {
  addProductToCart,
  getcartInformation
};
