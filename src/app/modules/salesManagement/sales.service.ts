import { Product } from "../product/product.model";
import { TSales } from "./sales.interface";
import { Sales } from "./sales.model";


const createSalesHistory = async (sales: TSales) => {
    const findProduct =await Product.findById(sales.productId);
    console.log(findProduct)
    const availableQuantity = (findProduct.quantity)  - sales.quantity
    const updateQuantity =await Product.findByIdAndUpdate(sales.productId,{quantity:availableQuantity })
    const newSales =  await Sales.create(sales);
    return {};
  };

  export const salesServices = {
    createSalesHistory
  };
  