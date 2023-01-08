import { NavLink } from "react-router-dom";
import "./style.scss";
import Links from "../../constants/Links";
import { ChangeProductsAmount, CountSum } from "../Common/counterProducts";

const DOLLAR_SYMBOL = "$";

function HeaderApp() {
  return (
    <>
      <header className="header">
        <NavLink className="logo" to={Links.MAIN_PAGE}></NavLink>
        <div className="cart-total">
          Cart total:
          <span className="card-total__amount"> {CountSum()}</span>
          {DOLLAR_SYMBOL}
        </div>
        <NavLink
          data-testid="basket-link"
          className="basket"
          to={Links.BASKET_PAGE}
        >
          <span className="basket_number-goods">{ChangeProductsAmount()}</span>
        </NavLink>
      </header>
    </>
  );
}

export default HeaderApp;
