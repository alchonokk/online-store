import { Link } from "react-router-dom";
import Links from "../../constants/Links";
import { CartButton } from "../Common/ButtonCounterBox";
import { IBasketArr } from "../../pages/BasketPage";

const CardBasket = ({
  id,
  brand,
  name,
  category,
  price,
  stock,
  thumbnail,
  amount,
}: IBasketArr) => {
  return (
    <div className="card-basket">
      <img src={thumbnail} alt="Card img" />
      <div className="card-basket__information">
        <h3 className="card-basket__category">{category}</h3>
        <h3 className="card-basket__name">{name}</h3>
        <Link
          className="card-basket__detail"
          to={`${Links.PRODUCT_DETAILS}/${id}`}
        >
          More detailed
        </Link>
      </div>
      <div>
        <h4 className="card-basket__stock">Stock: {stock}</h4>
        {<CartButton id={id} price={price} stock={stock} />}
      </div>
      <div className="card-basket__box-price">
        <h4 className="card-basket__price">Price:</h4>
        <p className="card-basket__price_number">{price}$ </p>
      </div>
    </div>
  );
};

export { CardBasket };
