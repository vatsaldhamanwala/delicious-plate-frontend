import { createContext, useContext } from 'react';

//create context
export const AuthContext = createContext('');

// custom hook for using context
export const useAuth = () => {
  return useContext(AuthContext);
};
