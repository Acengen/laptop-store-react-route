import React from "react";

const productContext = React.createContext({
  products: [],
  onChange: () => {},
  loading: false,
  prod: [],
  clearProductsToBuy: () => {},
  deleteProd: () => {},
});

export default productContext;
