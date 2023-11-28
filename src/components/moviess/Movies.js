import { useNavigate } from "react-router-dom";

// data
import MovieHomeData from "./movie_data";

const Movies = () => {
  // to full list
  const navigate = useNavigate();
  const handleList = () => {
    navigate("/movielist");
  };

  return (
    <div className="Movies">
      <div className="Title">MOVIES</div>
      <div className="List">
        <MovieHomeData />
      </div>
      <div className="Butt">
        <button onClick={handleList}> 🔻See more</button>
      </div>
    </div>
  );
};

export default Movies;
