interface ICounterBox {
  num: number;
  handleDecrement: (count: number) => void;
  handleIncrement: (count: number) => void;
}

const CounterBox = ({ num, handleDecrement, handleIncrement }: ICounterBox) => {
  return (
    <div className="counter-box">
      <button className="counter" onClick={() => handleDecrement(num)}>
        —
      </button>
      <span className="number-products">{num}</span>
      <button className="counter" onClick={() => handleIncrement(num)}>
        +
      </button>
    </div>
  );
};

export default CounterBox;
