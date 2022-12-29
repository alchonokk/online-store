import { useState } from "react";
import { Link } from "react-router-dom";
import cx from "classnames";
import createUrlForImage from "../../helpers/createUrlForImage";
import CounterBox from "../Common/CounterBox";

import Links from "../../constants/Links";

type CardType = {
  id: string;
  brand: string;
  name: string;
  category: string;
  discription: string;
  price: string;
  stock: string;
  imgNumber: string;
  images: string[];
};

const Card = ({ id, name, category, price, imgNumber }: CardType) => {
  const [num, setNum] = useState(0);
  const [isAddToCard, setIsAddToCard] = useState(false);

  const handleIncrement = (count: number) => {
    setNum(count + 1);
  };

  const handleDecrement = (count: number) => {
    count <= 1 ? setNum(0) : setNum(count - 1);
    if (count <= 1) {
      setIsAddToCard(!isAddToCard);
    }
  };

  const addedToCar = (num: number) => {
    if (!isAddToCard) {
      setIsAddToCard(true);
      handleIncrement(num);
    }
  };

  const cl = cx("add-to-cart", {
    "add-to-cart__active": isAddToCard,
  });

  return (
    <div className="card">
      <img src={createUrlForImage(imgNumber)} alt="Card img" />
      <div className="card-information">
        <h3 className="card-category">{category}</h3>
        <h3 className="card-name">{name}</h3>
        <Link className="card-detail" to={`${Links.PRODUCT_DETAILS}/${id}`}>
          More detailed
        </Link>
      </div>
      <div className={cl} onClick={() => addedToCar(num)}>
        <div className="add-to-cart-title">
          {!isAddToCard ? `Add to card: ${price}$` : "Added to card"}
        </div>
        {isAddToCard && (
          <CounterBox
            num={num}
            handleDecrement={handleDecrement}
            handleIncrement={handleIncrement}
          />
        )}
      </div>
    </div>
  );
};

export { Card };
