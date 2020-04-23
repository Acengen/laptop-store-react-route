import React from "react";

const Buy = ({ price, clearPrice }) => {
  return price < 1 ? null : (
    <div className="buy-price-products">
      <div>Total amount:</div>
      <div>${price}</div>
      <i onClick={() => clearPrice()} className="fa fa-refresh"></i>
    </div>
  );
};

export default Buy;
