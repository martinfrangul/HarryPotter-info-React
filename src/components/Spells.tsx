import { useContext, useEffect } from "react";
import { ContextDataAPI } from "../context/ContextDataAPI";

const Spells: React.FC = () => {
  const { spellsList, setSpellsList } = useContext(ContextDataAPI);

  useEffect(() => {
    const fetchSpells = async () => {
      try {
        const response = await fetch(
          "https://hp-api.onrender.com/api/spells/",
          {
            method: "GET",
          }
        );
        const data = await response.json();
        setSpellsList(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchSpells();
  }, [setSpellsList]);

  return (
    <>
      <div className="w-full h-full flex flex-wrap justify-center gap-4">
        {spellsList.map((spell) => (
          <div key={spell.name}>
            <div className=" bg-orange-300 border-2 border-solid border-black rounded w-80 h-52 overflow-auto flex flex-col justify-center">
              <h1 className="text-3xl text-black">{spell.name}</h1>
              <h2 className="text-sm text-black">{spell.description}</h2>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Spells;
