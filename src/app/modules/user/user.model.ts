import { Schema, model } from 'mongoose';
import { TUser } from './user.interface';

const userSchema = new Schema<TUser>(
  {
    name: {
      type: String,
      require: true,
    },
    email: {
      type: String,
      require: true,
      unique: true,
    },
    password: {
      type: String,
      require: true,
    },
    role:{
      type:String,
      required:true
    }
  },
  {
    timestamps: true,
  },
);

export const User = model<TUser>('User', userSchema);
