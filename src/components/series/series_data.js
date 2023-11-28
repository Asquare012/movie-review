import { useEffect, useState } from "react";
import plus from "./plus.png";
import checked from "./checked.png";

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3MjIyMmM5OTI0Yzc2OTlkZmNkODkxYzYzOTU1MzBmMCIsInN1YiI6IjY1MDBlMjYzZjI5ZDY2MDEzYTNiM2U5MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.weQOfRExY3OF3lcYVrp7-ShSHpelM0AUGhxoUObDblM",
  },
};

const SeriesHomeData = () => {
  const [series, setSeries] = useState([]);
  const [watch, setWatch] = useState(false);

  const handleClick = () => {
    setWatch(!watch);
  };

  const getSeries = () => {
    fetch(
      "https://api.themoviedb.org/3/trending/tv/day?language=en-US",
      options
    )
      .then((response) => response.json())
      .then((response) => setSeries(response.results))
      .catch((err) => console.error(err));
  };

  useEffect(() => getSeries, []);
  return (
    <>
      {series.slice(0, 4).map((series) => {
        return (
          <div
            className="Item"
            key={series.id}
            style={{
              backgroundImage: `url(https://image.tmdb.org/t/p/w500/${series.poster_path})`,
              backgroundSize: "cover",
            }}
          >
            <div className="Name">{series.name}</div>
            <div className="Date">{series.first_air_date}</div>
            <div className="Clicks">
              <button onClick={handleClick}>
                {watch ? (
                  <img src={checked} alt="checked" height="100%" />
                ) : (
                  <img src={plus} alt="plus" />
                )}
              </button>
              <button>More info</button>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default SeriesHomeData;
