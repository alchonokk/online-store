import CardsBox from "../../components/CardsBox";
import ListFilters from "../../components/FiltersForMainPage";
import MainPageHeader from "../../components/MainPageHeader";

import "./style.scss";

const MainPage = () => {
  return (
    <div className="products">
      <MainPageHeader />
      <div className="products-container">
        <ListFilters />
        <div className="divide-line"></div>
        <CardsBox />
      </div>
    </div>
  );
};

export default MainPage;
