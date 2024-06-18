import {
  createContext,
  useState,
  Dispatch,
  SetStateAction,
  // useEffect,
} from "react";
import { CharacterTypeComplete } from "../types";


const ContextDataAPI = createContext<CharactersGroupType | undefined>({
  data: [],
  setData: () => {},
});

interface MainProviderProps {
  children: React.ReactNode;
}

interface CharactersGroupType {
  data: CharacterTypeComplete[];
  setData: Dispatch<SetStateAction<CharacterTypeComplete[]>>;
}

const APIProvider: React.FC<MainProviderProps> = ({ children }) => {
  const [data, setData] = useState<CharacterTypeComplete[]>([]);

  
  return (
    <ContextDataAPI.Provider value={{data, setData }}>
      {children}
    </ContextDataAPI.Provider>
  );
};

export { ContextDataAPI, APIProvider };
