import { useState } from "react";
import { ChangeProductsAmount, CountSum } from "../Common/counterProducts";
import { SEPARATOR } from "../../pages/DetailedPage";
import cx from "classnames";

const PERCENT_DISCONT = 10;

function SummaryBox() {
  const [isDisable, setIsDisable] = useState<boolean>(true);
  const [isRS, setRS] = useState<boolean>(false);
  const [is2023, set2023] = useState<boolean>(false);
  const [isRSSubmit, setRSSubmit] = useState<boolean>(false);
  const [is2023Submit, set2023Submit] = useState<boolean>(false);
  const [numDiscont, setNumDiscont] = useState(0);

  const handleIncrementDiscont = (count: number) => {
    setNumDiscont(count + PERCENT_DISCONT);
  };

  const handleDecrementDiscont = (count: number) => {
    count <= 1 ? setNumDiscont(0) : setNumDiscont(count - PERCENT_DISCONT);
  };

  const discontPrice = CountSum() * (1 - numDiscont / 100);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const target = e.target;
    if (target.value === "RS" && !isRS && !isRSSubmit) {
      setIsDisable(false);
      setRS(true);
    }
    if (target.value === "2023" && !is2023 && !is2023Submit) {
      setIsDisable(false);
      set2023(true);
    }
  };

  const handleSubmit = async (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsDisable(true);
    e.target.reset();
    if (isRS) {
      handleIncrementDiscont(numDiscont);
      setRSSubmit(true);
      setRS(false);
    }
    if (is2023) {
      handleIncrementDiscont(numDiscont);
      set2023Submit(true);
      set2023(false);
    }
  };

  const handleDeleteDiscontRS = () => {
    handleDecrementDiscont(numDiscont);
    setRSSubmit(false);
  };

  const handleDeleteDiscont2023 = () => {
    handleDecrementDiscont(numDiscont);
    set2023Submit(false);
  };

  const cl = cx("card-total__amount", {
    "cross-title": isRSSubmit || is2023Submit,
  });

  return (
    <>
      <h2>Summary:</h2>
      <div className="cart-total">
        <span className="basket_number-goods">
          Products: {ChangeProductsAmount()}
        </span>
        <span className={cl}> Total: {CountSum()} $</span>
        {(isRSSubmit || is2023Submit) && (
          <h3 className="discont__box_total">Total: {discontPrice} $</h3>
        )}
      </div>
      <div className="discont__box">
        <form onSubmit={handleSubmit}>
          <label>
            PROMOCODE:
            <input type="text" placeholder="RS,2023" onChange={handleChange} />
          </label>
          <input type="submit" value="Apply" disabled={isDisable} />
        </form>
        {isRSSubmit && (
          <div className="discont__box_button">
            <span>RS{SEPARATOR}discont 10% </span>
            <button onClick={handleDeleteDiscontRS}>X</button>
          </div>
        )}
        {is2023Submit && (
          <div className="discont__box_button">
            <span>2023{SEPARATOR}discont 10%</span>
            <button onClick={handleDeleteDiscont2023}>X</button>
          </div>
        )}
      </div>
    </>
  );
}

export default SummaryBox;
