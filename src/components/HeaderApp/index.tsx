import { NavLink } from "react-router-dom";
import "./style.scss";
import Links from "../../constants/Links";

const DEFAULT_AMOUNT = 0;
const DEFAULT_NUM_GOODS = 0;
const DOLLAR_SYMBOL = "$";

const HeaderApp = () => {
  return (
    <>
      <header className="header">
        <NavLink className="logo" to={Links.MAIN_PAGE}></NavLink>
        <div className="cart-total">
          Cart total:
          <span className="card-total__amount"> {DEFAULT_AMOUNT}</span>
          {DOLLAR_SYMBOL}
        </div>
        <NavLink className="basket" to={Links.BASKET_PAGE}>
          <span className="basket_number-goods">{DEFAULT_NUM_GOODS}</span>
        </NavLink>
      </header>
    </>
  );
};

export default HeaderApp;
