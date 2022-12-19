import createUrlForImage from "./CreateImageURL";
import { Link } from 'react-router-dom';
import { AddtoCart } from "./AddToCart";
import React from "react";
import { useState } from "react";

type CardType = {
  id: string;
  brand: string;
  name: string;
  category: string;
  discription: string;
  price: string;
  stock: string;
  thumbnailNumber: string;
  images: string[],
};

const CreateCard = ({ id, name, category, price, thumbnailNumber }: CardType) => {
  const [num, setNum] = useState(1);

  const CounterIncrement = () => {
    setNum (num+1);   
  }
  const CounterDecrement = () => {
    num === 1 ? setNum (1) : setNum (num-1);
  }
  
  return (
    <div className="card">
      <img src={createUrlForImage(thumbnailNumber)} alt="img picture" />
      <div className="card-information">
        <h3 className="card-category">{category}</h3>
        <h3 className="card-name">{name}</h3>
        <Link className="card-detail" to={`/product-details/${id}`}>More detailed</Link>
      </div>
      <div className="add-to-cart" onClick={AddtoCart(num)}>
        <div className="add-to-cart-title">Add to card: {price}$</div> 
        <div className="counter-box">
          <button className="counter" onClick={CounterDecrement}>—</button>
          <span className="number-products" >{num}</span>
          <button className="counter" onClick={CounterIncrement}>+</button>
        </div>
      </div>
    </div>
  );
};

export { CreateCard };