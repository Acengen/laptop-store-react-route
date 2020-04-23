import React from "react";
import { Link } from "react-router-dom";
import Buy from "./Buy";

class Products extends React.Component {
  state = {
    prod: [],
    price: "",
  };
  componentDidMount() {
    this.buyProducts(0);
  }
  buyProducts = (price) => {
    const newPrice = parseFloat(this.state.price + price);
    this.setState({
      price: newPrice,
    });
  };

  clearPrice = () => {
    this.setState({
      price: 0,
    });
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
              <button
                onClick={() => this.buyProducts(prods.price)}
                className="prod-buy-btn"
              >
                Buy
              </button>
              {prods.price < 100 && <button className="buy">Hot!</button>}
            </div>
          </div>
        </div>
      );
    });
    return (
      <div className="products">
        {prod}
        <div>
          <Buy price={this.state.price} clearPrice={this.clearPrice} />
        </div>
      </div>
    );
  }
}

export default Products;
