import { useAppSelector } from "../../app/hooks";

export const ChangeProductsAmount = () => {
  const cartProducts = useAppSelector((state) => state.basket.basketProducts);
  return cartProducts.reduce((accum, item) => accum + item.amount, 0);
};

export const CountSum = () => {
  const cartProducts = useAppSelector((state) => state.basket.basketProducts);
  return cartProducts.reduce(
    (accum, item) => accum + item.amount * item.price,
    0
  );
};
