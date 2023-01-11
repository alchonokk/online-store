import ListFilters from "./ListFilters";
import dataForFilter from "../../data/dataForFilters.json";
import "./style.scss";

const Filters = () => {
  return (
    <div className="filters-container">
      <button className="btn">Reset Filters</button>
      <button className="btn">Copy Link</button>
      <ListFilters listArr={dataForFilter.brands} title="Brands"></ListFilters>
      <ListFilters
        listArr={dataForFilter.category}
        title="Category"
      ></ListFilters>
    </div>
  );
};

export default Filters;
