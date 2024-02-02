import { Schema, model } from 'mongoose';
import { TSales } from './sales.interface';

const salesSchema = new Schema<TSales>(
  {
    buyerName: {
      type: String,
      require: true,
    },
    quantity: {
      type: Number,
      require: true,
    },
    date: {
      type: String,
      require: true,
    },
    productName: {
      type: String,
      require: true,
    },
    productId: {
      type: Schema.Types.ObjectId,
      require: true,
    },
  },
  {
    timestamps: true,
  },
);

export const Sales = model<TSales>('Sales', salesSchema);
