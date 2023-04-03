import axios, { AxiosInstance } from 'axios';
import { IProduct } from '../../types/models/Product';

class ProductService {
  private static instance: ProductService;
  axiosInstance: AxiosInstance;
  private constructor() {
    this.axiosInstance = axios.create({
      baseURL: process.env.REACT_APP_PRODUCT_API_BASE_URL,
    });
  }

  public static getInstance(): ProductService {
    if (!ProductService.instance) {
        ProductService.instance = new ProductService();
    }
    return ProductService.instance;
}

  async getProducts(): Promise<IProduct[]> {
    return await (
      await this.axiosInstance.get('products')
    ).data;
  }
}

export default ProductService;
