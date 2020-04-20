import React from "react";
import { Link } from "react-router-dom";

const ProductType = ({ productsType, onChange }) => {
  const prod = productsType.map((prods) => {
    return (
      <div className="card" key={prods.id}>
        <img src={prods.picture} alt="productimage" />
        <div className="card-body">
          <div>
            <h3>{prods.name}</h3>
            <p className="text-muted">{prods.type}</p>
          </div>
          <div>
            <p className="price">${prods.price}</p>
            <Link to={`/productDetail/${prods.name}`}>more</Link>
            <button
              className="buyBtn"
              onClick={() =>
                onChange(prods.price, prods.name, prods.type, prods.id)
              }
            >
              <i className="fa fa-shopping-cart"></i>
            </button>
          </div>
        </div>
      </div>
    );
  });
  return <div className="product-type">{prod}</div>;
};

export default ProductType;
