import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./css/main.css";
import axios from "axios";

import Navbar from "./Navbar";
import Products from "./Products";
import Form from "./Form";
import ProductType from "./ProductType";
import About from "./About";
import ProductDetail from "./ProductDetail";
import ProdBuy from "./ProdBuy";
import Alert from "./Alert";

class App extends Component {
  state = {
    products: [],
    productsType: [],
    productDetail: [],
    prod: [],
    term: false,
    alert: "",
  };

  componentDidMount() {
    this.getProducts();
  }

  getProducts = async () => {
    const respon = await axios.get("http://localhost:3000/products");

    this.setState({
      products: respon.data,
    });
  };

  searchProducts = async (type) => {
    const respon = await axios.get(`http://localhost:3000/products?q=${type}`);

    this.setState({
      productsType: respon.data,
    });
  };

  getProductByName = async (name) => {
    const respon = await axios.get(
      `http://localhost:3000/productDetail?q=${name}`
    );

    this.setState({
      productDetail: respon.data,
    });
  };

  resetStore = () => {
    this.setState({
      productsType: [],
    });
  };

  onChange = (price, name, type, id) => {
    const newStat = [...this.state.prod, { price, name, type, id }];
    this.setState({
      prod: newStat,
    });
  };

  clearProductsToBuy = () => {
    this.setState({
      prod: [],
    });
  };

  deleteProd = (index) => {
    let list = this.state.prod;
    list.splice(index, 1);

    this.setState({
      prod: list,
    });
  };

  alertShow = (msg, type) => {
    this.setState({
      alert: { msg: msg, type: type },
    });

    setTimeout(() => {
      this.setState({
        alert: "",
      });
    }, 4000);
  };

  render() {
    return (
      <Router>
        <div className="container">
          <Navbar />

          <Switch>
            <Route
              exact
              path="/"
              render={(props) => (
                <Fragment>
                  <Alert alert={this.state.alert} />

                  <Form
                    searchProducts={this.searchProducts}
                    alertShow={this.alertShow}
                  />
                  <button onClick={this.resetStore} className="reset">
                    Reset Store
                  </button>
                  {this.state.productsType.length > 1 ? (
                    <ProductType
                      productsType={this.state.productsType}
                      onChange={this.onChange}
                    />
                  ) : (
                    <Products
                      products={this.state.products}
                      onChange={this.onChange}
                    />
                  )}
                  <ProdBuy
                    prod={this.state.prod}
                    clearProductsToBuy={this.clearProductsToBuy}
                    deleteProd={this.deleteProd}
                  />
                </Fragment>
              )}
            />
            <Route exact path="/about" component={About} />
            <Route
              exact
              path="/productDetail/:name"
              render={(props) => (
                <Fragment>
                  <ProductDetail
                    {...props}
                    productDetail={this.state.productDetail}
                    getProductByName={this.getProductByName}
                  />
                </Fragment>
              )}
            />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
