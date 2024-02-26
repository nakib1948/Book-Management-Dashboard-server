import mongoose from 'mongoose';
import { Product } from '../product/product.model';
import { TSales } from './sales.interface';
import { Sales } from './sales.model';
import { Cart } from '../cart/cart.model';

const createSalesHistory = async (sales: TSales) => {
  
    const session = await mongoose.startSession()
    try {
        session.startTransaction()
        const findProduct = await Cart.findOne({productId:sales.productId,userEmail:sales.userEmail}).session(session);
        const availableQuantity = findProduct.quantity - sales.quantity;
        const updateQuantity = await Cart.findOneAndUpdate({productId:sales.productId,userEmail:sales.userEmail}, {
          quantity: availableQuantity,
        }).session(session)
        const newSales = await Sales.create([sales],{session});
        await session.commitTransaction()
        await session.endSession()
        return newSales;
    } catch (error) {
        await session.abortTransaction();
        await session.endSession()
    }
};

const getAllSalesInformation =async (email) => {
  
    return await Sales.find({userEmail:email}) ;
}

export const salesServices = {
  createSalesHistory,
  getAllSalesInformation
};
