import { Route, Routes } from "react-router-dom";
import Links from "../../constants/Links";
import ErrorPage from "../../pages/ErrorPage";
import LayoutApp from "../LayoutApp/LayoutApp";
import BasketPage from "../../pages/BasketPage";
import DetailedPage from "../../pages/DetailedPage";
import MainPage from "../../pages/MainPage";

function RoutesWrapper() {
  return (
    <Routes>
      <Route path={Links.MAIN_PAGE} element={<LayoutApp />}>
        <Route index element={<MainPage />} />
        <Route path={Links.BASKET_PAGE} element={<BasketPage />} />
        <Route path={Links.PRODUCT_DETAILS}>
          <Route path=":id" element={<DetailedPage />} />
        </Route>
      </Route>
      <Route path="*" element={<LayoutApp />}>
        <Route path="*" element={<ErrorPage />} />
      </Route>
    </Routes>
  );
}

export default RoutesWrapper;
