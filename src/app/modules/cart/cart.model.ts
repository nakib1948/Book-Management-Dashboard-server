import { Schema, model } from 'mongoose';
import { TCart } from './cart.interface';

const cartSchema = new Schema<TCart>(
  {
    productId: {
      type: String,
      require: true,
    },
    productName: {
      type: String,
      require: true,
    },
    price: {
      type: Number,
      require: true,
    },
    quantity: {
      type: Number,
      require: true,
    },
    userEmail: {
      type: String,
      require: true,
    },
  },
  {
    timestamps: true,
  },
);

export const Cart = model<TCart>('Cart', cartSchema);
