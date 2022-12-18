import createUrlForImage from "./CreateImageURL";
import { Link } from 'react-router-dom';
import { Count } from "./Count";
import React from "react";

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

const AddtoCart = (event: React.MouseEvent<HTMLElement>) => {
  const target = event.target as HTMLElement;
  if (target.className ==='add-to-cart-title' ) {
    target.textContent = 'Added to card';
  }
  if ( target.className ==='add-to-cart') {
    target.firstElementChild!.textContent = 'Added to card';
  }
}

const CreateCard = ({ id, name, category, price, thumbnailNumber }: CardType) => {
  return (
    <div className="card">
      <img src={createUrlForImage(thumbnailNumber)} alt="img picture" />
      <div className="card-information">
        <h3 className="card-category">{category}</h3>
        <h3 className="card-name">{name}</h3>
        <Link className="card-detail" to={`/product-details/${id}`}>More detailed</Link>
      </div>
      <div className="add-to-cart" onClick={AddtoCart}>
        <div className="add-to-cart-title">Add to card: {price}$</div> 
        <div className="counter-box">{Count()}</div>
      </div>
    </div>
  );
};

export { CreateCard };