import { NavLink } from 'react-router-dom';
import './style.css';
import Links from '../../enumerations/LinksEnum';

function HeaderApp() {
  return (
    <>
      <header className="header">
        <NavLink className='logo' to={Links.mainPage}></NavLink>
        <div className='header-cart-total'>Cart total: <span className='amount-money'> 0</span>$</div>
        <NavLink className='basket' to={Links.basketPage}><span className='amount-goods'>0</span></NavLink>
      </header>
    </>
  );
}

export default HeaderApp;