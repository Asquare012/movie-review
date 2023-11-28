import { useState } from "react";
import "./hero.scss";
import plus from "./plus.png";
import added from "./boost.png";

const Hero = () => {
  const [watch, setWatch] = useState(false);
  const handleClick = () => {
    setWatch(!watch);
  };
  return (
    <div className="Hero">
      <div className="Main">
        <div className="Title">The Crown</div>
        <div className="Buttons">
          <button onClick={handleClick}>
            {watch ? (
              <>
                <img src={added} alt="added" height="15px" />
                Added to watchlist
              </>
            ) : (
              <>
                <img src={plus} alt="plus" height="15px" />
                Watchlist
              </>
            )}
          </button>
          <button>More Info</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
