import createUrlForImage from './createUrlForImage';
import { Link } from 'react-router-dom';
import { addtoCart } from "./addToCart";
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

const Card = ({ id, name, category, price, thumbnailNumber }: CardType) => {
  const [num, setNum] = useState(1);

  const handleIncrement = () => {
    setNum (num+1);   
  }
  const handleDecrement = () => {
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
      <div className="add-to-cart" onClick={addtoCart(num)}>
        <div className="add-to-cart-title">Add to card: {price}$</div> 
        <div className="counter-box">
          <button className="counter" onClick={handleDecrement}>—</button>
          <span className="number-products" >{num}</span>
          <button className="counter" onClick={handleIncrement}>+</button>
        </div>
      </div>
    </div>
  );
};

export { Card };