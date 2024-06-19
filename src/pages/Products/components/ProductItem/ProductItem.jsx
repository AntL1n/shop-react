import { useDispatch, useSelector } from "react-redux";
import {
  addToBasket,
  getBasket,
  countBasket,
} from "../../../../redux/basket/basketSlice";

export const ProductItem = ({
  id,
  title,
  image,
  price,
  description,
  count,
  rate,
}) => {
  const dispatch = useDispatch();
  const basket = useSelector(getBasket);

  const addProductItem = () => {
    dispatch(addToBasket({ title, price, id, image, quantity: 1 }));
  };

  const handleCountQuality = (e) => {
    const basketCardIndex = basket.findIndex((e) => e.id === id);
    const newCard = {
      ...basket[basketCardIndex],
      quantity:
        e.target.innerText === "+"
          ? basket[basketCardIndex].quantity + 1
          : basket[basketCardIndex].quantity - 1,
    };
    dispatch(countBasket({ basketCardIndex, newCard }));
    // const newBasket = basket.filter((e) => e.id !== newCard.id);
    // dispatch(countBasket([...newBasket, newCard]));
  };

  const isInBasketFind = basket.find((e) => e.id === id);

  return (
    <>
      <li>
        <h2>{title}</h2>
        <img width={150} src={image} alt={title} />
        <p>{price}</p>
        <p>{description}</p>
        <p>{count}</p>
        <p>{rate}</p>
      </li>

      <button onClick={addProductItem} disabled={isInBasketFind} type="button">
        Add
      </button>
      {isInBasketFind && (
        <>
          <button
            onClick={handleCountQuality}
            disabled={isInBasketFind.quantity === 0}
            type="button"
          >
            -
          </button>
          <p>{isInBasketFind.quantity}</p>
          <button
            onClick={handleCountQuality}
            disabled={isInBasketFind.quantity === count}
            type="button"
          >
            +
          </button>
        </>
      )}
    </>
  );
};
