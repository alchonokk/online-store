import { Link } from "react-router-dom";
import { createUrlForImage } from "../../helpers/createUrlForImage";
import Links from "../../constants/Links";
import { CartButton } from "../Common/ButtonCounterBox";

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

const Card = ({ id, name, category, price, imgNumber, stock }: CardType) => {
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
      {<CartButton id={id} price={price} stock={stock} />}
    </div>
  );
};

export { Card };
