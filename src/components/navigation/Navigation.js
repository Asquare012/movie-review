import { NavLink } from "react-router-dom";
import "./navigation.scss";
const Navigation = () => {
  return (
    <nav className="Navigation">
      <ul>
        <NavLink to="/">
          <li>Movies</li>
        </NavLink>

        <NavLink to="/series">
          <li>Series</li>
        </NavLink>
      </ul>
    </nav>
  );
};

export default Navigation;
