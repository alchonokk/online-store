import { useState } from "react";
import { Link } from "react-router-dom";

import Links from "../../../constants/Links";
import AddButton from "../../common/AddButtton";

export interface ICardType {
  id: number;
  title: string;
  price: number;
  thumbnail: string;
  brand: string;
  category: string;
  images: string[];
  description: string;
  details: string[];
  volume: string;
  stock: number;
}

const Card = ({ id, title, category, price, thumbnail, brand }: ICardType) => {
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

  const addedToCard = (num: number) => {
    if (!isAddToCard) {
      setIsAddToCard(true);
      handleIncrement(num);
    }
  };

  return (
    <div className="card">
      <img src={thumbnail} alt="Card img" />
      <div className="card-information">
        <h3 className="card-category">
          {category} {brand}
        </h3>
        <h3 className="card-name">{title}</h3>
        <Link className="card-detail" to={`${Links.PRODUCT_DETAILS}/${id}`}>
          More detailed
        </Link>
      </div>
      <AddButton
        num={num}
        price={price}
        isAddToCard={isAddToCard}
        addedToCard={addedToCard}
        handleDecrement={handleDecrement}
        handleIncrement={handleIncrement}
      />
    </div>
  );
};

export default Card;
