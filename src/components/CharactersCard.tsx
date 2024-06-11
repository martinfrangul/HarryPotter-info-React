import { useState, useEffect } from "react";

const CharactersCard = () => {
  const [data, setData] = useState([]);
  const [primeraPagina, setPrimeraPagina] = useState([]);
  const [nextPage, setNextPage] = useState<number>(20);

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

  console.log(data);

  const handlePaginacion = () => {
    const newPage = nextPage + 20;
    const siguientePagina = data.slice(0, newPage);
    setPrimeraPagina(siguientePagina);
    setNextPage(newPage);
  };

  useEffect(() => {
    if (data.length > 0) {
      const primeraPagina = data.slice(0, 20);
      setPrimeraPagina(primeraPagina);
    }
  }, [data]);

  return (
    <>
      <div className="w-100 h-100"></div>
      {primeraPagina.map((item, index) => (
        <h1 key={index}>{item.name}</h1>
      ))}
      <button
        className="btn-lg bg-teal-500 w-100 h-100"
        onClick={handlePaginacion}
      >
        Páginación
      </button>
    </>
  );
};

export default CharactersCard;
