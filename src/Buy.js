import React from "react";

class Buy extends React.Component {
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

export default Buy;
