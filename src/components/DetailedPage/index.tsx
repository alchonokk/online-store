import { useState } from "react";
import { useParams, NavLink } from "react-router-dom";

import data from "../../data/data.json";
import AddButton from "../common/AddButtton";
// import ModalWindow from "../../components/ModalWindow";

import "./style.scss";
// import CounterBox from "../../components/common/CounterBox";

const SEPARATOR = " > ";

function DetailedPage() {
  const { id } = useParams();
  const idItem = id ? +id : null;
  const [item] = data.products.filter((product) => product.id === idItem);

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
    <div className="page description-page">
      <h3 className="description-page__title">
        Product description {item.id}{" "}
      </h3>
      <div className="description-page__bread-crumbs">
        <NavLink to="/" className="bread-crumbs__catalog">
          Store Catalog
        </NavLink>
        {SEPARATOR}
        <span>{item.brand}</span>
        {SEPARATOR}
        <span>{item.category}</span>
        {SEPARATOR}
        <span>{item.title}</span>
      </div>
      <div className="description-page__box">
        <div className="wrapper__img">
          <img className="main-img" src={item.thumbnail} alt="Card img" />
          <div className="wrapper__little-img">
            <img className="little-img" src={item.images[0]} alt="Card img" />
            <img className="little-img" src={item.images[1]} alt="Card img" />
            <img className="little-img" src={item.images[2]} alt="Card img" />
          </div>
        </div>
        <div className="description-page__box_text">
          <div>
            <h4>{item.category}</h4>
            <h5>{item.title}</h5>
          </div>
          <p>{item.description}</p>
        </div>
        <div className="description-page__box_price-amount">
          <p>Price: {item.price} $</p>
          <p>Stock: {item.stock}</p>
          {/* <ModalWindow /> */}
          <AddButton
            num={num}
            price={item.price}
            isAddToCard={isAddToCard}
            addedToCard={addedToCard}
            handleDecrement={handleDecrement}
            handleIncrement={handleIncrement}
          />
        </div>
      </div>
    </div>
  );
}

export default DetailedPage;
