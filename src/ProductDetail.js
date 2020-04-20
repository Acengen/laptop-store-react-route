import React, { Component } from "react";
import { Link } from "react-router-dom";

class ProductDetail extends Component {
  componentDidMount() {
    this.props.getProductByName(this.props.match.params.name);
  }

  render() {
    const productDetail = this.props.productDetail.map((prod) => {
      return (
        <div className="card" key={prod.id}>
          <div className="row no-gutters">
            <div className="col-md-4">
              <h2 className="text-center">{prod.name}</h2>
              <p className="text-center text-muted">{prod.type}</p>
              <img src={prod.picture} className="card-img" alt="..." />
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
        </div>
      );
    });
    return (
      <div className="product-detail">
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

export default ProductDetail;
