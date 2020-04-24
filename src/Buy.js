import React from "react";

const Buy = ({ price, clearPrice }) => {
  console.log(price);
  return (
    <div className="buy-price-products">
      <div>Total amount:</div>
      <div>${price}</div>
      <i onClick={() => clearPrice()} className="fa fa-refresh"></i>
    </div>
  );
};

export default Buy;
