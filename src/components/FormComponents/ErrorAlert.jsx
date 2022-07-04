import React from "react";
import "./ErrorAlert.css";

function ErrorAlert(props) {
  return (
    <div className="alert">
      <i className="fa-solid fa-circle-exclamation"></i> {props.message}
    </div>
  );
}

export default ErrorAlert;
