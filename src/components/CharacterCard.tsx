import { useContext } from "react";
import { ContextDataAPI } from "../context/ContextDataAPI";
import { CharacterCardProps, CharacterTypeComplete } from "../../src/types";

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
    <div>
      <>
        <div>
          <h1 className="text-2xl"> {character.name}</h1>
          <img src={character.image} alt="" />
        </div>
        <div>
          <h3>{character.house}</h3>
          <h3>{character.species}</h3>
          <h3>{character.gender}</h3>
          <h3>{character.wizard}</h3>
          <h3>{character.actor}</h3>
        </div>
      </>
      )
    </div>
  );
};

export default CharacterCard;
