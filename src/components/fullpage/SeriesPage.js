import { useNavigate } from "react-router-dom";
import "./moviePage.scss";
import top from "./top.png";

// series data
import SeriesData from "./SeriesData";
const SeriesFullList = () => {
  //show less
  const navigate = useNavigate();
  const handleLess = () => {
    navigate("/series");
  };

  // to top
  const handleToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="Fullpage">
      <div className="Movies">
        <div className="Title">SERIES</div>
        <div className="List">
          <SeriesData />
          <div className="Show_less">
            <button onClick={handleLess}>🔺Show less</button>
          </div>
        </div>
        <div className="Top">
          <img src={top} alt="top" height="50px" onClick={handleToTop} />
        </div>
      </div>
    </div>
  );
};

export default SeriesFullList;
