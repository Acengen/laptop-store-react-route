import React from "react";
import { Link } from "react-router-dom";
import Spinner from "../Spinner";
import Error from "../Error & Alert/Error";
import ProductContext from "../context/Context";

class Products extends React.Component {
  static contextType = ProductContext;

  render() {
    console.log("[Products.js] rendering...");
    const { products, onChange, loading } = this.context;
    if (loading) {
      return <Spinner />;
    } else {
      return (
        <div className="products">
          <Error>
            {products.map((prods) => {
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
                          onChange(
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

export default Products;
