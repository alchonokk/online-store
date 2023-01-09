interface INumFilter {
  title: string;
}

const InputNumFilter = ({ title }: INumFilter) => {
  return (
    <div className="num-filter">
      <h1>{title}</h1>
      <div className="inputs-filter">
        <input type="text" />
        <div className="num-line"></div>
        <input type="text" />
      </div>
    </div>
  );
};

export default InputNumFilter;
