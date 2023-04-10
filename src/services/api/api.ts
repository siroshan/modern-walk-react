import axios, { AxiosInstance } from 'axios';

export const axiosProductInstance: AxiosInstance = axios.create({
  baseURL: process.env.REACT_APP_PRODUCT_API_BASE_URL,
});
export const axiosUserInstance: AxiosInstance = axios.create({
  baseURL: process.env.REACT_APP_USER_API_BASE_URL,
});
