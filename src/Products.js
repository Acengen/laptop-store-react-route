import React from "react";
import { Link } from "react-router-dom";
import Spinner from "./Spinner";
import Error from "./Error";
import PropTypes from "prop-types";

class Products extends React.Component {
  /* Optimization */
  shouldComponentUpdate(nextProps, nextState) {
    console.log("shouldComponentUpdate");
    if (
      nextProps.products !== this.props.products ||
      nextProps.onChange !== this.props.onChange
    ) {
      return true;
    } else {
      return false;
    }
  }
  render() {
    console.log("[Products.js] rendering...");
    if (this.props.loading) {
      return <Spinner />;
    } else {
      return (
        <div className="products">
          <Error>
            {this.props.products.map((prods) => {
              console.log("rendering....");
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
                      {prods.price < 100 && (
                        <button className="buy">Hot!</button>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </Error>
        </div>
      );
    }
  }
}

Products.propTypes = {
  onChange: PropTypes.func.isRequired,
  products: PropTypes.array.isRequired,
};

export default Products;
