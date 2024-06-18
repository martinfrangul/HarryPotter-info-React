import { useContext } from "react";
import { ContextDataAPI } from "../context/ContextDataAPI";
import { CharacterCardProps, CharacterTypeComplete } from "../../src/types";
import notFound from "../assets/img/not-found-img.png";

const CharacterCard: React.FC<CharacterCardProps> = ({ idForCard }) => {
  const context = useContext(ContextDataAPI);

  if (!context) {
    throw new Error("Characters data must be used within a MainProvider");
  }

  const { data } = context;

  const character = data.find(
    (item: CharacterTypeComplete) => item.id === idForCard
  );

  if (!character) {
    return <div>Character not found</div>;
  }

  return (
    <div className="container flex flex-row items-center justify-evenly bg-zinc-950 bg-opacity-75 w-[50rem] h-[30rem] m-auto p-10 rounded-3xl ">
      <div>
        <h1 className="text-4xl p-4"> {character.name}</h1>
        <div>
          {character.image ? (
            <img className="w-[17rem] h-[17rem] object-top rounded-3xl object-cover outline-4 border-yellow-300 outline-double" src={character.image} alt="character-img" />
          ) : (
            <img className="w-[17rem] h-[17rem] object-top rounded-3xl object-cover outline-4 border-yellow-300 outline-double" src={notFound} alt="" />
          )}
        </div>
      </div>
      <div>
        <h3 className="text-3xl p-4 text-right">House: {character.house}</h3>
        <h3 className="text-3xl p-4 text-right">Gender: {character.gender}</h3>
        <h3 className="text-2xl p-4 text-right">Specie: {character.species}</h3>
        <h3 className="text-2xl p-4 text-right">Actor: {character.actor}</h3>
        {character.wizard === true ? <h3 className="text-xl p-4 text-right">Wizard: Yes</h3> : <h3 className="text-xl p-4 text-right">Wizard: No</h3>}
      </div>
    </div>
  );
};

export default CharacterCard;
