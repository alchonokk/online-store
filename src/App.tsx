import React from "react";

import { Route, Routes, Outlet } from "react-router-dom";

import HeaderApp from "./components/HeaderApp";
import FooterApp from "./components/FooterApp";
import ProductsPage from "./components/ProductsPage";
import ErrorPage from "./components/ErrorPage";
import DetailedPage from "./components/DetailedPage";
import Links from "./constants/Links";

import "./style.scss";

const App = () => {
  return (
    <div className="app">
      <Routes>
        <Route
          path={Links.MAIN_PAGE}
          element={
            <>
              <HeaderApp />
              <Outlet />
              <FooterApp />
            </>
          }
        >
          <Route index element={<ProductsPage />} />
          <Route path={Links.PRODUCT_DETAILS}>
            <Route path=":id" element={<DetailedPage />} />
          </Route>
        </Route>
        <Route
          path="*"
          element={
            <>
              <HeaderApp />
              <Outlet />
              <FooterApp />
            </>
          }
        >
          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
