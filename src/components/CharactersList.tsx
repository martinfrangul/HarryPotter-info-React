import { useState, useEffect, useContext } from "react";
import "../styles/CharactersList.css";
import { ContextDataAPI } from "../context/ContextDataAPI";
import notFound from "../assets/img/not-found-img.png";
import { NavLink } from "react-router-dom";
import { CharacterType } from "../../src/types";
import { CharactersListProps } from "../../src/types";

const CharactersList: React.FC<CharactersListProps> = ({ selectedId }) => {
  const [list, setPage] = useState<CharacterType[]>([]);
  const [nextPage, setNextPage] = useState<number>(20);

  const context = useContext(ContextDataAPI);

  if (!context) {
    throw new Error("Characters data must be used within a MainProvider");
  }

  const { data, setData } = context;

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


  // FUNCIONES PARA QUE MUESTRE DE A 20 RESULTADOS //

  const handlePages = () => {
    if (data) {
      const newPage = nextPage + 20;
      const siguientePagina = data.slice(0, newPage);
      setPage(siguientePagina);
      setNextPage(newPage);
    }
  };

  useEffect(() => {
    if (data && data.length > 0) {
      const list = data.slice(0, 20);
      setPage(list);
    }
  }, [data]);

  // COLOR DE FONDO DE DE CADA ITEM DE LA LISTA

  const getBackgroundColor = (house: string) => {
    switch (house) {
      case "Gryffindor":
        return "bg-red-400 ";
      case "Hufflepuff":
        return "bg-yellow-200";
      case "Ravenclaw":
        return "bg-blue-400";
      case "Slytherin":
        return "bg-green-300";
      default:
        return "bg-gray-400";
    }
  };

  return (
    <>
      <div className="grid grid-cols-1 gap-4 w-2/4 m-auto mt-5">
        {list.map((item) => (
          <div
            key={item.id}
            className={`max-h-sm ${getBackgroundColor(
              item.house
            )} bg-green border-gray-200 rounded-lg shadow flex flex-row items-center justify-between`}
          >
            <div className="p-2 flex flex-row justify-between items-center w-full">
              <div className=" w-1/4">
                <div className="character-image flex items-center justify-center">
                  {item.image ? (
                    <img
                      className="w-20 h-20 object-top rounded-full object-cover"
                      src={item.image}
                      alt="character-image"
                    />
                  ) : (
                    <img
                      className="w-20 h-20 object-top rounded-full object-cover"
                      src={notFound}
                      alt="character-image"
                    />
                  )}
                </div>
              </div>
              <div className="w-2/4 p-5 flex flex-col items-center justify-center">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
                  {item.name}
                </h5>
                <p className="mb-3 font-normal text-gray-700">
                  {item.house}
                </p>
              </div>
              <div className="item-button w-1/4 flex justify-end p-3">
                <NavLink
                  to="/characterCard"
                  onClick={() => selectedId(item.id)}
                  // className="relative btn btn-lg px-4 py-2 text-xl border-b-2 border-transparent hover:border-neutral-500 focus:border-neutral-500 focus:outline-none"
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
                </NavLink>
              </div>
            </div>
          </div>
        ))}
      </div>

      <button
        className="btn-lg bg-teal-500 rounded px-5 py-3 mt-4"
        onClick={handlePages}
      >
        More
      </button>
    </>
  );
};

export default CharactersList;
