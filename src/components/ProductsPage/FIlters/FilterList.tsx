interface IFilterList {
  listArr: string[];
  title: string;
}

const FilterList = ({ listArr, title }: IFilterList) => {
  return (
    <div className="filter-list">
      <h1>{title}</h1>
      <div>
        {listArr.map((item) => (
          <div key={item} className="filter-checkbox">
            <input type="checkbox" />
            <span>{item}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FilterList;
