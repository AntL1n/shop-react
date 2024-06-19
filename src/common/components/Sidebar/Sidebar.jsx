import { NavLink } from "react-router-dom";
export const Sidebar = () => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <NavLink to="/">Products</NavLink>
          </li>
          <li>
            <NavLink to="/about-us">About us</NavLink>
          </li>
          <li>
            <NavLink to="/delivery">Delivery</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};
