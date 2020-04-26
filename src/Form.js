import React, { Component } from "react";

class Form extends Component {
  state = {
    productsType: "",
    email: "",
    password: "",
    classes: "",
    valid: false,
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
    if (e.target.value) {
      this.setState({
        classes: "green",
        valid: true,
      });
    }
    if (!e.target.value) {
      this.setState({
        valid: false,
        classes: "",
      });
    }
    this.setState({
      productsType: e.target.value,
    });
  };
  render() {
    console.log(this.state);
    return (
      <div className="form-container my-3">
        <p>SEARCH PRODUCTS</p>
        <form onSubmit={this.onSubmit}>
          <input
            className={this.state.classes}
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
