import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { FaBasketShopping } from "react-icons/fa6";
import { getBasket } from "../../../redux/basket/basketSlice";
export const Header = () => {
  const basketCount = useSelector(getBasket);

  return (
    <header>
      <img src="" alt="" />
      <input type="text" />
      <NavLink to="/basket">
        <FaBasketShopping size={30} />
        <span>{basketCount.length}</span>
      </NavLink>
    </header>
  );
};
