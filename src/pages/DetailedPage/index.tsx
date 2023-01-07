import { useParams, NavLink } from "react-router-dom";
import { data } from "../../components/CardsBox/CartData";
import ModalWindow from "../../components/ModalWindow";
import {
  createUrlForImage,
  createUrlForImages,
} from "../../helpers/createUrlForImage";
import "./style.scss";
import { CartButton } from "../../components/Common/ButtonCounterBox";

const SEPARATOR = " > ";

function DetailedPage() {
  const { id } = useParams();

  const dataIndex = data.findIndex((product) => product.id === id);
  const { brand, name, category, discription, price, stock, imgNumber } =
    data[dataIndex];

  return (
    <div className="page description-page">
      <h3 className="description-page__title">Product description {id} </h3>
      <div className="description-page__bread-crumbs">
        <NavLink to="/" className="bread-crumbs__catalog">
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
          <img
            className="main-img"
            src={createUrlForImage(imgNumber)}
            alt="Card img"
          />
          <div className="wrapper__little-img">
            <img
              className="little-img"
              src={createUrlForImages(imgNumber, "1")}
              alt="Card img"
            />
            <img
              className="little-img"
              src={createUrlForImages(imgNumber, "2")}
              alt="Card img"
            />
            <img
              className="little-img"
              src={createUrlForImages(imgNumber, "3")}
              alt="Card img"
            />
          </div>
        </div>
        <div className="description-page__box_text">
          <div>
            <h4>{category}</h4>
            <h5>{name}</h5>
          </div>
          <p>{discription}</p>
        </div>
        <div className="description-page__box_price-amount">
          <p>Price: {price} $</p>
          <p>Stock: {stock}</p>
          <ModalWindow />
          {id && <CartButton id={id} price={price} stock={stock} />}
        </div>
      </div>
    </div>
  );
}

export default DetailedPage;
