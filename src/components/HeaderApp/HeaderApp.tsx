import { NavLink } from 'react-router-dom';
import './style.css';

function HeaderApp() {
  return (
    <>
      <header className="header">
        <NavLink className='logo' to="/"></NavLink>
        <div className='header-cart-total'>Cart total: <span className='amount-money'> 0</span>$</div>
        <NavLink className='basket' to="/basket" ><span className='amount-goods'>0</span></NavLink>
      </header>
    </>
  );
}

export default HeaderApp;