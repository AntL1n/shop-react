import { useGetCatalogQuery } from "../../redux/catalog/catalogOperations";
import { ProductItem } from "./components/ProductItem/ProductItem";
import { useSelector } from "react-redux";
import { getBasket } from "../../redux/basket/basketSlice";
export const Products = () => {
  const { data } = useGetCatalogQuery();
  const basketList = useSelector(getBasket);
  console.log(basketList);
  return (
    <ul>
      {data?.map(
        ({ id, title, image, price, description, rating: { rate, count } }) => (
          <ProductItem
            key={id}
            id={id}
            title={title}
            image={image}
            price={price}
            description={description}
            rate={rate}
            count={count}
          />
        )
      )}
    </ul>
  );
};
