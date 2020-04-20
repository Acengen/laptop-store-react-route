import React from "react";
import { Link } from "react-router-dom";

class Products extends React.Component {
  state = {
    prod: [],
    price: "",
  };

  render() {
    const prod = this.props.products.map((prods) => {
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
                  this.props.onChange(
                    prods.price,
                    prods.name,
                    prods.type,
                    prods.id
                  )
                }
              >
                <i className="fa fa-shopping-cart"></i>
              </button>
            </div>
          </div>
        </div>
      );
    });
    return (
      <div className="products">
        {prod}
        <div></div>
      </div>
    );
  }
}

export default Products;
