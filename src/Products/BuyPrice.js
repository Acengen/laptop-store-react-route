import React from "react";
import PropType from "prop-types";

class BuyPrice extends React.Component {
  shouldComponentUpdate(nextProps) {
    if (nextProps.price !== this.props.price) {
      return true;
    }
    return false;
  }
  render() {
    return (
      <div className="buy-price-products">
        <div>Total amount:</div>
        <div>${this.props.price}</div>
        <i
          onClick={() => this.props.clearPrice()}
          className="fa fa-refresh"
        ></i>
      </div>
    );
  }
}

BuyPrice.propTypes = {
  clearPrice: PropType.func.isRequired,
  price: PropType.number.isRequired,
};

export default BuyPrice;
