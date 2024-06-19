import { createContext, ReactNode, useState, useEffect } from "react";
import { onAuthStateChanged, User } from "firebase/auth";
import { auth } from "../firebase";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";

interface AuthContextType {
  user: User | null;
  isFetching: boolean;
  setUser: React.Dispatch<React.SetStateAction<User | null>>;
  handleSignOut: () => void;
}

const defaultValue: AuthContextType = {
    user: null,
    isFetching: true,
    setUser: () => {},
    handleSignOut: () => {},
  };

const AuthContext = createContext<AuthContextType>(defaultValue);

const AuthContextProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [user, setUser] = useState<User | null>(null);
  const [isFetching, setIsFetching] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        setIsFetching(false);
        navigate ("/")
      } else {
        setUser(null);
      }
    });

    return () => unsubscribe();
  }, []);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => navigate ("/"))
      .catch((error) => console.log(error));
  };

  return (
    <AuthContext.Provider value={{ user, handleSignOut, isFetching, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthContextProvider };
