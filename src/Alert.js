import React from "react";

const Alert = ({ alert }) => {
  return (
    alert !== "" && (
      <div className={`alert alert-${alert.type}`}>
        <i class="fa fa-warning"></i> {alert.msg}
      </div>
    )
  );
};

export default Alert;
