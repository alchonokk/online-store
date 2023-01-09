import CounterBox from "./CounterBox";
import cx from "classnames";

interface IAddButton {
  num: number;
  price: number;
  isAddToCard: boolean;
  addedToCard: (num: number) => void;
  handleDecrement: (num: number) => void;
  handleIncrement: (num: number) => void;
}

const AddButton = ({
  num,
  price,
  isAddToCard,
  addedToCard,
  handleDecrement,
  handleIncrement,
}: IAddButton) => {
  const cl = cx("add-to-cart", {
    "add-to-cart__active": isAddToCard,
  });
  return (
    <div className={cl} onClick={() => addedToCard(num)}>
      <div className="add-to-cart-title">
        {!isAddToCard ? `Add to card: ${price}$` : "Added to card"}
      </div>
      {isAddToCard && (
        <CounterBox
          num={num}
          handleDecrement={handleDecrement}
          handleIncrement={handleIncrement}
        />
      )}
    </div>
  );
};

export default AddButton;
