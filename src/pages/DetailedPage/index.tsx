import { useParams, NavLink } from "react-router-dom";
import { data } from "../../components/CardsBox/CartData";
import "./style.scss";
import { CartButton } from "../../components/Common/ButtonCounterBox";
import Links from "../../constants/Links";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../../app/hooks";
import { useAppDispatch } from "../../app/hooks";
import { addProduct } from "../../reducer/basketReducer/basketslice";

export const SEPARATOR = " > ";

function DetailedPage() {
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const dataIndex = data.findIndex((product) => product.id === id);
  const {
    brand,
    name,
    category,
    description,
    price,
    stock,
    thumbnail,
    images,
  } = data[dataIndex];

  const cartProducts = useAppSelector((state) => state.basket.basketProducts);
  function moveToBasket(id: string, price: string) {
    const toggleProduct = cartProducts.find((product) => product.id === id);
    if (toggleProduct) {
      navigate(Links.BASKET_PAGE);
    } else {
      dispatch(addProduct({ id, amount: 1, price: Number(price) }));
      navigate(Links.BASKET_PAGE);
    }
  }

  return (
    <div className="page description-page">
      <h3 className="description-page__title">Product description </h3>
      <div className="description-page__bread-crumbs">
        <NavLink to={Links.MAIN_PAGE} className="bread-crumbs__catalog">
          Store Catalog
        </NavLink>
        {SEPARATOR}
        <span>{brand}</span>
        {SEPARATOR}
        <span>{category}</span>
        {SEPARATOR}
        <span>{name}</span>
      </div>
      <div className="description-page__box">
        <div className="wrapper__img">
          <img className="main-img" src={thumbnail} alt="Card img" />
          <div className="wrapper__little-img">
            <img className="little-img" src={images[0]} alt="Card img" />
            <img className="little-img" src={images[1]} alt="Card img" />
            <img className="little-img" src={images[2]} alt="Card img" />
          </div>
        </div>
        <div className="description-page__box_text">
          <div>
            <h4>{category}</h4>
            <h5>{name}</h5>
          </div>
          <p>{description}</p>
        </div>
        <div className="description-page__box_price-amount">
          <p>Price: {price} $</p>
          <p>Stock: {stock}</p>
          {id && (
            <button
              className="modal-button"
              onClick={() => moveToBasket(id, price)}
            >
              Buy now
            </button>
          )}
          {id && <CartButton id={id} price={price} stock={stock} />}
        </div>
      </div>
    </div>
  );
}

export default DetailedPage;
