import { useNavigate } from "react-router-dom";

// data
import SeriesHomeData from "./series_data";

const Series = () => {
  // to full list
  const navigate = useNavigate();
  const handleList = () => {
    navigate("/serieslist");
  };

  return (
    <div className="Movies">
      <div className="Title">SERIES</div>
      <div className="List">
        <SeriesHomeData />
      </div>
      <div className="Butt">
        <button onClick={handleList}>🔻 See more</button>
      </div>
    </div>
  );
};

export default Series;
