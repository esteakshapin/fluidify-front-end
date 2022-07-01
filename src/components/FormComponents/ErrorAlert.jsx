import React from "react";
import "./ErrorAlert.css";

function ErrorAlert(props) {
  return (
    <div class="alert">
      <i class="fa-solid fa-circle-exclamation"></i> {props.message}
    </div>
  );
}

export default ErrorAlert;
