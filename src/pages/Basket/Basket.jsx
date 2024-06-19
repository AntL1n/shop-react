import { useSelector } from "react-redux";
import { getBasket } from "../../redux/basket/basketSlice";
import { BasketItem } from "./components/BasketItem";
export const Basket = () => {
  const basketList = useSelector(getBasket);
  console.log(basketList);
  return (
    <ul>
      {basketList?.map(({ id, title, image, price }) => (
        <BasketItem
          key={id}
          id={id}
          title={title}
          image={image}
          price={price}
        />
      ))}
    </ul>
  );
};
