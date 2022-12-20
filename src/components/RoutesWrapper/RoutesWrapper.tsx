import { Route, Routes } from 'react-router-dom';
import Links from '../../enumerations/LinksEnum';
import ErrorPage from '../../pages/ErrorPage/ErrorPage';
import LayoutApp from '../LayoutApp/LayoutApp';
import BasketPage from '../../pages/BasketPage/BasketPage';
import DiscriptionPage from '../../pages/DiscriptionPage/DiscriptionPage';
import MainPage from '../../pages/MainPage/MainPage';

function RoutesWrapper() {
  return (
    <Routes>
      <Route path={Links.mainPage} element={<LayoutApp />}>
        <Route index element={<MainPage />} />
        <Route path={Links.basketPage} element={<BasketPage />} />
        <Route path={Links.discriptionPage}>
          <Route path=":id" element={<DiscriptionPage />} />
        </Route>
      </Route>
      <Route path="*" element={<LayoutApp />}>
        <Route path="*" element={<ErrorPage />} />
      </Route>
    </Routes>
  );
}

export default RoutesWrapper;