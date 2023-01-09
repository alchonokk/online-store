import { useState } from "react";
import cx from "classnames";
import CounterBox from "./CounterBox";
import { useAppDispatch } from "../../app/hooks";
import {
  addProduct,
  changeProductAmount,
  deleteProduct,
} from "../../reducer/basketReducer/basketslice";
import { useAppSelector } from "../../app/hooks";

type CardType = {
  id: string;
  price: string;
  stock: string;
};

const CartButton = ({ id, price, stock }: CardType) => {
  const dispatch = useAppDispatch();

  const cartProducts = useAppSelector((state) => state.basket.basketProducts);
  let startBoolean;
  let startAmount;
  const toggleProduct = cartProducts.find((product) => product.id === id);
  if (toggleProduct) {
    startBoolean = true;
    startAmount = toggleProduct.amount;
  } else {
    startBoolean = false;
    startAmount = 0;
  }

  const [num, setNum] = useState(startAmount);
  const [isAddToCard, setIsAddToCard] = useState(startBoolean);

  const handleIncrement = (count: number) => {
    if (count < Number(stock)) {
      setNum(count + 1);
      dispatch(
        changeProductAmount({ id, amount: count + 1, price: Number(price) })
      );
    } else {
      setNum(Number(stock));
      dispatch(
        changeProductAmount({ id, amount: Number(stock), price: Number(price) })
      );
    }
  };

  const handleDecrement = (count: number) => {
    count <= 1 ? setNum(0) : setNum(count - 1);
    dispatch(
      changeProductAmount({ id, amount: count - 1, price: Number(price) })
    );
    if (count <= 1) {
      setIsAddToCard(!isAddToCard);
      dispatch(deleteProduct(id));
    }
  };

  const addedToCart = (num: number) => {
    if (!isAddToCard) {
      setIsAddToCard(true);
      dispatch(addProduct({ id, amount: num, price: Number(price) }));
      handleIncrement(num);
    }
  };

  const cl = cx("add-to-cart", {
    "add-to-cart__active": isAddToCard,
  });

  return (
    <div className={cl} onClick={() => addedToCart(num)}>
      <div className="add-to-cart-title">
        {!isAddToCard ? `Add to cart ${price}$` : "Added to cart"}
      </div>
      {isAddToCard && (
        <CounterBox
          num={num}
          handleDecrement={handleDecrement}
          handleIncrement={handleIncrement}
        />
      )}
    </div>
  );
};

export { CartButton };
