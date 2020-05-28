import React, { Component } from "react";
import { Link } from "react-router-dom";
import Spinner from "../Spinner";
import PropType from "prop-types";

class ProductDetail extends Component {
  componentDidMount() {
    this.props.getProductByName(this.props.match.params.name);
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (nextProps.productDetail !== this.props.productDetail) {
      return true;
    }
    return false;
  }

  render() {
    let paragraph = null;
    let classes = "show-show";
    if (this.props.price > 500) {
      paragraph = <p className={`show-p ${classes}`}>You have 10% descort</p>;
    } else {
      paragraph = null;
    }

    const productDetail = this.props.productDetail.map((prod) => {
      console.log("[productDetail.js]");
      return (
        <div className="card" key={prod.id}>
          <div className="row no-gutters">
            <div className="col-md-4">
              <h2 className="text-center">{prod.name}</h2>
              <p className="text-center text-muted">{prod.type}</p>
              <img src={prod.picture} className="card-img" alt="..." />
              <p className="card-header font-weight-bold">${prod.price}</p>
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-header">Configurations</h5>
                <p className="card-text my-2">Processor: {prod.processor}</p>
                <p className="card-text">Speed: {prod.BaseClockSpeed}</p>
                <p className="card-text">RAM: {prod.RAM}</p>
                <p className="card-text">Hard Disk: {prod.HardDisk}</p>
              </div>
            </div>
          </div>

          <button
            onClick={() => this.props.buyProducts(prod.price)}
            className={`prod-buy-btn`}
          >
            Buy Now
          </button>
        </div>
      );
    });

    if (this.props.loading) {
      return <Spinner />;
    } else {
      return (
        <div className="product-detail">
          {paragraph}
          <div>
            {productDetail}
            <Link to="/">
              <i className="fa fa-arrow-circle-o-left"></i>
            </Link>
          </div>
        </div>
      );
    }
  }
}

ProductDetail.propTypes = {
  loading: PropType.bool.isRequired,
  buyProducts: PropType.func.isRequired,
  price: PropType.number.isRequired,
  productDetail: PropType.array.isRequired,
};

export default ProductDetail;
