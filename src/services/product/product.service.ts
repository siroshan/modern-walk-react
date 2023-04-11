import { AxiosError } from 'axios';
import { IProduct } from '../../models/Product';
import { axiosProductInstance } from '../api/api';
import { CustomError } from '../api/api.type';

export const getProducts = async (): Promise<IProduct[]> => {
  try {
    const { data } = await axiosProductInstance.get<IProduct[]>('products');
    // console.log('data', data);
    return data;
  } catch (err) {
    console.log('error', err);
    throw CustomError.fromAxiosError(err);
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
    throw CustomError.fromAxiosError(err);
  }
};
