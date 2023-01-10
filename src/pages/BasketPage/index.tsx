import { useAppSelector } from "../../app/hooks";
import { data } from "../../components/CardsBox/CartData";
import { CardBasket } from "../../components/CardsBox/CardBasket";
import ModalWindow from "../../components/ModalWindow";
import "./style.scss";
import SummaryBox from "../../components/SummaryBox";
import { useState } from "react";
import OrdersWasMade from "../../components/OrdersWasMade";

export interface IBasketArr {
  id: string;
  brand: string;
  name: string;
  category: string;
  price: string;
  stock: string;
  thumbnail: string;
  amount: number;
}

function BasketPage() {
  const [isSubmit, setIsSubmit] = useState(false);
  const basketArr: IBasketArr[] = [];
  const cartProducts = useAppSelector((state) => state.basket.basketProducts);
  cartProducts.map((product) => {
    const toggleProduct = data.find((item) => item.id === product.id);
    if (toggleProduct) {
      basketArr.push({
        id: product.id,
        brand: toggleProduct.brand,
        name: toggleProduct.name,
        category: toggleProduct.category,
        price: toggleProduct.price,
        stock: toggleProduct.stock,
        thumbnail: toggleProduct.thumbnail,
        amount: product.amount,
      });
    }
    return basketArr;
  });

  return (
    <div className="page basket-page">
      <h3 className="page__title">Products in cart </h3>

      {basketArr.map((item) => {
        return <CardBasket key={item.id} {...item}></CardBasket>;
      })}
      {basketArr.length ? (
        <div>
          <div className="line"></div>
          <div className="summary">
            <SummaryBox />
          </div>
          <ModalWindow setIsSubmit={setIsSubmit} />
        </div>
      ) : (
        !isSubmit && <h2>Cart is Empty</h2>
      )}
      {isSubmit && <OrdersWasMade />}
    </div>
  );
}

export default BasketPage;
