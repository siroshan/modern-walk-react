import { ReactNode, useMemo, useState, createContext, useContext } from 'react';
import { IUser } from '../../types/models/User';
import { UserContextType } from './userContext.type';

export const UserContext = createContext<UserContextType | null>(null);

const UserProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<IUser>();

  const signIn = (user: IUser) => {
    setUser(user);
  };

  const signOut = () => {
    setUser(undefined);
  };

  const value = useMemo(() => {
    return { user, signIn, signOut };
  }, [user]);

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

export const useUser = () => {
  const { user, signIn, signOut } = useContext(UserContext) as UserContextType;
  return { user, signIn, signOut };
};

export default UserProvider;
