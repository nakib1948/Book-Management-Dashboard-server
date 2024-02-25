import { Types } from "mongoose";

export type TSales = {
    buyerName: string;
    quantity: number;
    date:string;
    productName:string;
    productId : Types.ObjectId;
    contactNumber: string;
    userEmail:string;
}