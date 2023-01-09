import "./style.scss";

const ProductsHeader = () => {
  return (
    <div className="product-header">
      <div>
        <h2 className="product-header_h2">Catalog</h2>
        <div className="line"></div>
      </div>
      <div className="square-container">
        <div className="square-four"></div>
        <div className="square-six"></div>
      </div>
    </div>
  );
};

export default ProductsHeader;
