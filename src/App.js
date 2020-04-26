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
import Contact from "./Contact";
import Buy from "./Buy";

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
    show: false,
  };

  componentDidMount() {
    this.getProducts();
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
    const {
      alert,
      productsType,
      products,
      loading,
      price,
      productDetail,
      prod,
    } = this.state;
    return (
      <Router>
        <div className="container-fluid">
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
                      <Products
                        products={products}
                        onChange={this.onChange}
                        loading={loading}
                      />
                    )}
                    <ProdBuy
                      prod={prod}
                      clearProductsToBuy={this.clearProductsToBuy}
                      deleteProd={this.deleteProd}
                    />
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
                    <Buy price={price} clearPrice={this.clearPrice} />
                  </Fragment>
                )}
              />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
