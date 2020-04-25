import React from "react";
import loader from "./loading-spinner-animated-gif-10.gif";

const Spinner = () => {
  return (
    <div>
      <img
        src={loader}
        style={{ width: "400px", display: "block", margin: "auto" }}
        alt="spinner"
      />
    </div>
  );
};

export default Spinner;
