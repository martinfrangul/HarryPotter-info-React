import { useState, useEffect } from "react";
import "../styles/CharactersList.css";

const CharactersList = () => {
  const [data, setData] = useState([]);
  const [list, setPage] = useState([]);
  const [nextPage, setNextPage] = useState<number>(20);
  const [backgroundColor, setBackgroundColor] = useState("");

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
  }, []);

  const handlePages = () => {
    const newPage = nextPage + 20;
    const siguientePagina = data.slice(0, newPage);
    setPage(siguientePagina);
    setNextPage(newPage);
  };

  useEffect(() => {
    if (data.length > 0) {
      const list = data.slice(0, 20);
      setPage(list);
    }
  }, [data]);

  const getBackgroundColor = (house) => {
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
      <div className="grid grid-cols-1 gap-4 w-2/4 m-auto">
        {list.map((item) => (
          <div
            key={item.id}
            className={`max-h-sm ${getBackgroundColor(
              item.house
            )} bg-green border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 flex flex-row items-center justify-between`}
          >
            <div className="p-2 flex flex-row justify-between items-center w-full">
              <div className=" w-1/4"></div>
              <div className="w-2/4 p-5 flex flex-col items-center justify-center">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  {item.name}
                </h5>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  {item.house}
                </p>
              </div>
              <div className="item-button w-1/4 flex justify-end p-3">
                <a
                  href="#"
                  className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Open card
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
                </a>
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
