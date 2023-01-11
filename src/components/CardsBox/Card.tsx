import { Link } from "react-router-dom";
import Links from "../../constants/Links";
import { CartButton } from "../Common/ButtonCounterBox";

type CardType = {
  id: string;
  brand: string;
  name: string;
  category: string;
  description: string;
  price: string;
  stock: string;
  thumbnail: string;
  images: string[];
};

const Card = ({ id, name, category, price, thumbnail, stock }: CardType) => {
  return (
    <div className="card">
      <img src={thumbnail} alt="Card img" />
      <div className="card-information">
        <h3 className="card-category">{category}</h3>
        <h3 className="card-name">{name}</h3>
        <Link className="card-detail" to={`${Links.PRODUCT_DETAILS}/${id}`}>
          More detailed
        </Link>
      </div>
      <CartButton id={id} price={price} stock={stock} />
    </div>
  );
};

export { Card };
