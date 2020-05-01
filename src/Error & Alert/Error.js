import React, { Component } from "react";

export class Error extends Component {
  state = {
    errorShow: false,
    errorMessage: "",
  };

  componentDidCatch(error, info) {
    this.setState({
      errorShow: true,
      errorMessage: error,
    });
  }
  render() {
    if (this.state.errorShow) {
      return <h1>{this.state.errorMessage}</h1>;
    } else {
      return this.props.children;
    }
  }
}

export default Error;
