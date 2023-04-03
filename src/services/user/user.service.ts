import axios, { AxiosInstance } from 'axios';
import { IUser } from '../../types/models/User';

export class UserService {
  private static instance: UserService;
  axiosInstance: AxiosInstance;
  private constructor() {
    this.axiosInstance = axios.create({
      baseURL: process.env.REACT_APP_USER_API_BASE_URL,
    });
  }

  public static getInstance(): UserService {
    if (!UserService.instance) {
      UserService.instance = new UserService();
    }
    return UserService.instance;
  }

  async createUser(user: IUser): Promise<IUser> {
    return await (
      await this.axiosInstance.post(`users`, { ...user })
    ).data;
  }

  async getUser(email: string): Promise<IUser> {
    return await (
      await this.axiosInstance.get(`users?email=${email}`)
    ).data[0];
  }
}
