import React, { Component } from "react";

class Form extends Component {
  state = {
    productsType: "",
  };

  onSubmit = (e) => {
    e.preventDefault();
    if (this.state.productsType === "") {
      this.props.alertShow("Please fill Input field", "warning");
    } else {
      this.props.searchProducts(this.state.productsType);
    }
  };

  onChange = (e) => {
    this.setState({
      productsType: e.target.value,
    });
  };
  render() {
    return (
      <div className="form-container my-3">
        <p>SEARCH PRODUCTS</p>
        <form onSubmit={this.onSubmit}>
          <input
            onChange={this.onChange}
            value={this.state.productsType}
            type="text"
            name="name"
            placeholder="exp: laptop, keyboard"
          />
        </form>
      </div>
    );
  }
}

export default Form;
