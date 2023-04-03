import { IUser } from '../../types/models/User';

export type UserContextType = {
  user: IUser | undefined;
  signIn: (user: IUser) => void;
  signOut: () => void;
};
