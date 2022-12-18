import { useState } from "react";

const Count = () => {
  const [num, setNum] = useState(1);

  const CounterIncrement = () => {
    setNum (num+1);   
  }
  const CounterDecrement = () => {
    num === 1 ? setNum (1) : setNum (num-1);
  }
  
  return(
    <>
      <button className="counter" onClick={CounterDecrement}>—</button>
      <span className="number-products" >{num}</span>
      <button className="counter" onClick={CounterIncrement}>+</button>
    </>     
  );
}

export { Count };