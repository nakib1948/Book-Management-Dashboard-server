import mongoose from 'mongoose';
import { Product } from '../product/product.model';
import { TSales } from './sales.interface';
import { Sales } from './sales.model';

const createSalesHistory = async (sales: TSales) => {
    const session = await mongoose.startSession()
    try {
        session.startTransaction()
        const findProduct = await Product.findById(sales.productId).session(session);

        const availableQuantity = findProduct.quantity - sales.quantity;
        const updateQuantity = await Product.findByIdAndUpdate(sales.productId, {
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

export const salesServices = {
  createSalesHistory,
};
