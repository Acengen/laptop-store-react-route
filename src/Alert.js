import React from "react";

const Alert = ({ alert }) => {
  return (
    alert !== "" && (
      <div className={`alert alert-${alert.type}`}>
        <i className="fa fa-warning"></i> {alert.msg}
      </div>
    )
  );
};

export default Alert;
