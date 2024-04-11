import { User, onAuthStateChanged } from 'firebase/auth';
import { FC, ReactNode, createContext, useEffect, useMemo, useState } from 'react';
import { auth } from '../../../firebase';

type ContextTypes = User | null | undefined;

interface ContextProviderProps {
  children: ReactNode;
}

export const AuthContext = createContext<ContextTypes>(undefined);

export const AuthContextProvider: FC<ContextProviderProps> = ({ children }) => {
  const [currentUser, setCurrentUser] = useState<ContextTypes>(undefined);

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
    });

    return () => {
      unsub();
    };
  }, []);

  const contextValue = useMemo(() => currentUser, [currentUser]);

  return <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>;
};
