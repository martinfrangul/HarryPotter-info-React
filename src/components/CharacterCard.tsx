import { useContext, useEffect, useState } from "react";
import { ContextDataAPI } from "../context/ContextDataAPI";
import { CharacterCardProps, CharacterTypeComplete } from "../../src/types";
import notFound from "../assets/img/not-found-img.png";

const CharacterCard: React.FC<CharacterCardProps> = ({ idForCard }) => {
  const context = useContext(ContextDataAPI);
  const [currentId, setCurrentId] = useState(idForCard);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentId]);

  if (!context) {
    throw new Error("Characters data must be used within a MainProvider");
  }

  const { data } = context;

  const character = data.find(
    (item: CharacterTypeComplete) => item.id === currentId
  );

  useEffect(() => {
    setCurrentId(idForCard);
  }, [idForCard]);

  if (!character) {
    return <div>Character not found</div>;
  }

  const otherCharactersByHouse = data
    .filter((item) => item.house === character.house && item.name !== character.name)
    .slice(0, 9);

  return (
    <>
      <section>
        <h1 className="w-full h-full bg-black text-3xl p-4 font-semibold mb-4">CHARACTER INFO</h1>
        <div className="lg:w-[50rem] md:w-3/4 container flex flex-col lg:flex-row items-center justify-evenly bg-zinc-950 bg-opacity-75 m-auto p-10 rounded-3xl">
          <div className="mb-4 lg:mb-0">
            <h1 className="text-4xl p-4"> {character.name}</h1>
            <div className="flex justify-center">
              {character.image ? (
                <img
                  className="w-72 h-72 object-top rounded-3xl object-cover outline-4 border-yellow-300 outline-double"
                  src={character.image}
                  alt="character-img"
                />
              ) : (
                <img
                  className="w-72 h-72 object-top rounded-3xl object-cover outline-4 border-yellow-300 outline-double"
                  src={notFound}
                  alt=""
                />
              )}
            </div>
          </div>
          <div>
            <h3 className="text-3xl p-4 text-center lg:text-right">
              House: {character.house}
            </h3>
            <h3 className="text-3xl p-4 text-center lg:text-right">
              Gender: {character.gender}
            </h3>
            <h3 className="text-2xl p-4 text-center lg:text-right">
              Species: {character.species}
            </h3>
            <h3 className="text-2xl p-4 text-center lg:text-right">
              Actor: {character.actor}
            </h3>
            {character.wizard === true ? (
              <h3 className="text-xl p-4 text-center lg:text-right">Wizard: Yes</h3>
            ) : (
              <h3 className="text-xl p-4 text-center lg:text-right">Wizard: No</h3>
            )}
          </div>
        </div>
      </section>
      <section className="w-full bg-gray-600 bg-opacity-80 mt-5">
        <h1 className="text-3xl p-4 font-semibold ">
          OTHERS CHARACTERS OF THE SAME HOUSE
        </h1>
        <hr />
        <div className="flex flex-wrap justify-center gap-4 mt-8 w-3/4 m-auto">
          {otherCharactersByHouse.map((character, index) => (
            <div
              key={index}
              className="flex flex-col items-center p-4 lg:w-80 w-60 bg-white rounded-lg shadow-md"
            >
              <div className="p-2 flex flex-col justify-between items-center w-full">
                <div>
                  <div className="character-image flex items-center justify-center">
                    {character.image ? (
                      <img
                        className="w-52 h-52 object-top rounded object-cover"
                        src={character.image}
                        alt="character-image"
                      />
                    ) : (
                      <img
                        className="w-52 h-52 object-top rounded object-cover"
                        src={notFound}
                        alt="character-image"
                      />
                    )}
                  </div>
                </div>
                <div className="w-2/4 p-5 flex flex-col items-center justify-center">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
                    {character.name}
                  </h5>
                  <p className="mb-3 font-normal text-gray-700">
                    {character.house}
                  </p>
                </div>
                <div className="item-button flex justify-end p-3">
                  <button
                    onClick={() => setCurrentId(character.id)}
                    className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300"
                  >
                    Details
                    <svg
                      className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 14 10"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M1 5h12m0 0L9 1m4 4L9 9"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default CharacterCard;
