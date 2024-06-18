import { createContext, ReactNode, useState } from "react";

interface AuthContextType {
    isLogged: boolean;
    setIsLogged: React.Dispatch<React.SetStateAction<boolean>>;
  }

const AuthContext = createContext<AuthContextType | undefined>(undefined);

const AuthContextProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [isLogged, setIsLogged] = useState<boolean>(false);
    
    return (
        <AuthContext.Provider value={{isLogged, setIsLogged}}>

        {children}

    </AuthContext.Provider>
);

};

export { AuthContext, AuthContextProvider}