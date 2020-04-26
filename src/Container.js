import React from "react";

const Container = (props) => {
  return <div className="container-fluid">{props.children}</div>;
};

export default Container;
