import { createContext, useState, Dispatch, SetStateAction } from "react";
import { CharacterTypeComplete } from "../types";
import { SpellsType } from "../types";

const ContextDataAPI = createContext<DataGroupType>({
  data: [],
  setData: () => {},
  spellsList: [],
  setSpellsList: () => {},
});

interface MainProviderProps {
  children: React.ReactNode;
}

interface DataGroupType {
  data: CharacterTypeComplete[];
  setData: Dispatch<SetStateAction<CharacterTypeComplete[]>>;
  spellsList: SpellsType[];
  setSpellsList: Dispatch<SetStateAction<SpellsType[]>>;
}

const APIProvider: React.FC<MainProviderProps> = ({ children }) => {
  const [data, setData] = useState<CharacterTypeComplete[]>([]);
  const [spellsList, setSpellsList] = useState<SpellsType[]>([]);

  return (
    <ContextDataAPI.Provider
      value={{ data, setData, spellsList, setSpellsList }}
    >
      {children}
    </ContextDataAPI.Provider>
  );
};

export { ContextDataAPI, APIProvider };
