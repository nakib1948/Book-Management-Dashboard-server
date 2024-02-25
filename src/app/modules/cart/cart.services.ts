import httpStatus from 'http-status';
import AppError from '../../errors/AppError ';
import { TCart } from './cart.interface';
import { Cart } from './cart.model';
import mongoose from 'mongoose';
import { Product } from '../product/product.model';
const addProductToCart = async (product: TCart) => {
  const res = await Cart.findOne({ productId: product.productId });
  if (res?.userEmail === product.userEmail) {
    throw new AppError(httpStatus.CONFLICT, 'product already exists on cart');
  }
  return await Cart.create(product);
};

const getcartInformation = async (email) => {
  return await Cart.find({ userEmail: email });
};

const quantityUpdate = async (data) => {
  const findProduct = await Product.findById(data.productId);
  if (findProduct?.quantity === 0 && data.type==='increase') {
    throw new AppError(httpStatus.NOT_ACCEPTABLE, 'product is out of stock');
  }
  const session = await mongoose.startSession();
  try {
    session.startTransaction();
    const findProduct = await Product.findById(data.productId).session(session);
    
    const availableQuantity = await findProduct.quantity + (data.type==="increase" ? -1 : 1);
    
    const updateQuantity = await Product.findByIdAndUpdate(data.productId, {
      quantity: availableQuantity,
    }).session(session);
    
    const findProductOncart = await Cart.findOne({
      productId: data.productId,
      userEmail: data.userEmail,
    }).session(session);
   
    const availableCartQuantity = findProductOncart.quantity + (data.type==="increase" ? 1 : -1);
   
    const updateCartQuantity = await Cart.findOneAndUpdate(
      { productId: data.productId, userEmail: data.userEmail },
      {
        quantity: availableCartQuantity,
      },
    ).session(session);
    await session.commitTransaction();
    await session.endSession();
    return null;
  } catch (error) {
    await session.abortTransaction();
    await session.endSession();
  }
};

export const cartServices = {
  addProductToCart,
  getcartInformation,
  quantityUpdate,
};
