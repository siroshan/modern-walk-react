import React, { ReactNode, useMemo } from 'react';
import { IUser } from '../../types/models/User';
import { UserContextType } from './userContext.type';

const UserContext = React.createContext<UserContextType | null>(null);

const UserProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = React.useState<IUser>();

  const removeUser = ()=> {
    setUser(undefined)
  }

  const value = useMemo(() => {
    return { user, setUser,removeUser };
  }, [user]);

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

export const useUser = () => {
  const user = React.useContext(UserContext) as UserContextType;

  if (!user?.user) {
    return null;
  }
  return user;
};

export default UserProvider;
