import {
  createContext,
  useEffect,
  useState,
  Dispatch,
  SetStateAction,
} from "react";

const ContextDataAPI = createContext<CharactersGroupType | undefined>({
  data: [],
  setData: () => {},
});

interface MainProviderProps {
  children: React.ReactNode;
}

interface CharacterType {
  name: string;
  house: string;
  id: string;
}

interface CharactersGroupType {
  data: CharacterType[];
  setData: Dispatch<SetStateAction<CharacterType[]>>;
}

const APIProvider: React.FC<MainProviderProps> = ({ children }) => {
  const [data, setData] = useState<CharacterType[]>([]);
  
  useEffect(() => {
    const llamandoAPI = async () => {
      try {
        const response = await fetch(
          "https://hp-api.onrender.com/api/characters/",
          {
            method: "GET",
            // headers: {
            //   "Content-type": "application/json;charset=UTF-8",
            //   // "Authorization": "Bearer YklqRdJCjLMbWH2tMyPG",
            // },
          }
        );
        const data = await response.json();
        setData(data);
      } catch (error) {
        console.log(error);
      }
    };

    llamandoAPI();
  }, [setData]);

  return (
    <ContextDataAPI.Provider value={{ data, setData }}>
      {children}
    </ContextDataAPI.Provider>
  );
};

export { ContextDataAPI, APIProvider };
