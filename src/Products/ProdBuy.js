import React, { Fragment, useContext } from "react";
import ProductContext from "../context/Context";

const ProdBuy = () => {
  const productContext = useContext(ProductContext);

  const prods = productContext.prod.map((prod, index) => {
    console.log("[ProdBuy] rendering . . . ");
    return (
      <div className="card" key={Math.random()}>
        <span
          className="close"
          onClick={() => productContext.deleteProd(index)}
        >
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
      {!productContext.prod.length ? null : (
        <Fragment>
          <h4 className="my-3">Shopping Cart</h4>
        </Fragment>
      )}

      <div className="prod">
        {prods}
        {!productContext.prod.length ? null : (
          <button onClick={() => productContext.clearProductsToBuy()}>
            Clear Cart
          </button>
        )}
      </div>
    </div>
  );
};

export default React.memo(ProdBuy);
