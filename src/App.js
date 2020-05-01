import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./css/main.css";
import axios from "axios";

import Container from "./container/Container";
import ProductContext from "./context/Context";

import Navbar from "./Navbar";
import Products from "./Products/Products";
import Form from "./Form";
import ProductType from "./Products/ProductType";
import About from "./Simple Pages/About";
import ProductDetail from "./Products/ProductDetail";
import ProdBuy from "./Products/ProdBuy";
import Alert from "./Error & Alert/Alert";
import Contact from "./Simple Pages/Contact";
import BuyPrice from "./Products/BuyPrice";

class App extends Component {
  state = {
    products: [],
    productsType: [],
    productDetail: [],
    prod: [],
    term: false,
    alert: "",
    buyPrice: [],
    price: 0,
    loading: false,
  };

  componentDidMount() {
    this.getProducts();
    console.log("componentDidMount");
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("componentDidUpdate");
  }

  getProducts = async () => {
    this.setState({ loading: true });

    const respon = await axios.get("http://localhost:3000/products");

    this.setState({
      products: respon.data,
      loading: false,
    });
  };

  searchProducts = async (type) => {
    const respon = await axios.get(`http://localhost:3000/products?q=${type}`);

    this.setState({
      productsType: respon.data,
    });
  };

  getProductByName = async (name) => {
    this.setState({
      loading: true,
    });
    const respon = await axios.get(
      `http://localhost:3000/productDetail?q=${name}`
    );

    this.setState({
      productDetail: respon.data,
      loading: false,
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
    let list = [...this.state.prod];
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
    const { alert, productsType, loading, price, productDetail } = this.state;

    return (
      <Router>
        <Container>
          <Navbar />
          <div className="container">
            <Switch>
              <Route
                exact
                path="/"
                render={(props) => (
                  <Fragment>
                    <Alert alert={alert} />
                    <Form
                      searchProducts={this.searchProducts}
                      alertShow={this.alertShow}
                    />
                    <button onClick={this.resetStore} className="reset">
                      Reset Store
                    </button>
                    {this.state.productsType.length > 1 ? (
                      <ProductType
                        productsType={productsType}
                        onChange={this.onChange}
                      />
                    ) : (
                      <ProductContext.Provider
                        value={{
                          products: this.state.products,
                          onChange: this.onChange,
                          loading: this.state.loading,
                        }}
                      >
                        <Products />
                      </ProductContext.Provider>
                    )}
                    <ProductContext.Provider
                      value={{
                        prod: this.state.prod,
                        clearProductsToBuy: this.clearProductsToBuy,
                        deleteProd: this.deleteProd,
                      }}
                    >
                      <ProdBuy />
                    </ProductContext.Provider>
                  </Fragment>
                )}
              />
              <Route exact path="/about" component={About} />
              <Route exact path="/contact" component={Contact} />
              <Route
                exact
                path="/productDetail/:name"
                render={(props) => (
                  <Fragment>
                    <ProductDetail
                      {...props}
                      productDetail={productDetail}
                      getProductByName={this.getProductByName}
                      buyProducts={this.buyProducts}
                      loading={loading}
                      price={price}
                    />
                    <BuyPrice price={price} clearPrice={this.clearPrice} />
                  </Fragment>
                )}
              />
            </Switch>
          </div>
        </Container>
      </Router>
    );
  }
}

export default App;
