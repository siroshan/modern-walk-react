import { IUser } from '../../types/models/User';

export type UserContextType = {
  user: IUser | undefined;
  setUser: React.Dispatch<React.SetStateAction<IUser | undefined>>;
  removeUser: () => void | undefined;
};
