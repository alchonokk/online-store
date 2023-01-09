import FilterList from "./FilterList";
import dataForFilter from "../../../data/dataForFilter.json";
import "./style.scss";
import InputNumFilter from "./InputNumFilter";

const Filters = () => {
  return (
    <div className="filters-container">
      <button className="btn">Reset Filters</button>
      <button className="btn">Copy Link</button>
      <FilterList listArr={dataForFilter.brands} title="Brands"></FilterList>
      <FilterList
        listArr={dataForFilter.category}
        title="Category"
      ></FilterList>
      <InputNumFilter title="Price" />
      <InputNumFilter title="Stock" />
    </div>
  );
};

export default Filters;
