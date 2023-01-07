import { ChangeProductsAmount, CountSum } from "../Common/counterProducts";

function SummaryBox() {
  return (
    <>
      <h2>Summary:</h2>
      <div className="cart-total">
        <span className="basket_number-goods">
          Products: {ChangeProductsAmount()}
        </span>
        <span className="card-total__amount"> Total: {CountSum()} $</span>
      </div>
    </>
  );
}

export default SummaryBox;
