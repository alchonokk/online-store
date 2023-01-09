import CardsBox from "./CardsBox";
import Filters from "./FIlters";
import ProductsHeader from "./ProductsHeader";
import data from "../../data/data.json";

import "./style.scss";

const ProductsPage = () => {
  const filteredData = data.products;

  return (
    <div className="products">
      <ProductsHeader />
      <div className="products-container">
        <Filters />
        <div className="line"></div>
        <CardsBox filteredData={filteredData} />
      </div>
    </div>
  );
};

export default ProductsPage;
