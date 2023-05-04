import { IProduct } from '../../models/Product';
import { axiosProductInstance } from '../api';

export const getProducts = async (): Promise<IProduct[]> => {
  try {
    const { data } = await axiosProductInstance.get<IProduct[]>('products');
    return data;
  } catch (err) {
    console.log('error', err);
    throw err;
  }
};

export const getProductsByCategory = async (
  category: string
): Promise<IProduct[]> => {
  try {
    const { data } = await axiosProductInstance.get<IProduct[]>(
      `https://fakestoreapi.com/products/category/${category}`
    );
    return data;
  } catch (err) {
    console.log('error', err);
    throw err;
  }
};
