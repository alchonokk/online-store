import { Outlet } from 'react-router-dom';

function LayoutApp() {
  return (
    <>
      <h1>Header and Footer</h1>
      <Outlet />
    </>
    
    // <HeaderApp />
    //   <Outlet />
    // <FooterApp />
  );
}

export default LayoutApp;