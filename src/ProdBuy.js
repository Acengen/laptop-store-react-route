import React, { Fragment } from "react";

const ProdBuy = ({ prod, clearProductsToBuy, deleteProd }) => {
  const prods = prod.map((prod, index) => {
    return (
      <div className="card" key={Math.random()}>
        <span className="close" onClick={() => deleteProd(index)}>
          <i className="fa fa-trash-o"></i>
        </span>
        <p>
          Product name: <span>{prod.name}</span>
        </p>
        <p>
          <span>cost</span> ${prod.price}
        </p>
      </div>
    );
  });
  return (
    <div className="box">
      {!prod.length ? null : (
        <Fragment>
          <h4 className="my-3">Shopping Cart</h4>
        </Fragment>
      )}

      <div className="prod">
        {prods}
        {!prod.length ? null : (
          <button onClick={() => clearProductsToBuy()}>Clear Cart</button>
        )}
      </div>
    </div>
  );
};

export default ProdBuy;
