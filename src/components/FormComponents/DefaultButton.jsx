import React from "react";
import "./DefaultButton.css";

function DefaultButton(props) {
  const btnClass =
    "DefaultButton " + props.btnClass + (props.loading ? " loading" : "");

  //setting default values
  const text = props.text ? props.text : "submit";
  const type = props.type ? props.type : "submit";

  return (
    <button
      type={type}
      className={btnClass}
      onClick={props.onclickFunction}
      disabled={props.loading}
    >
      {!props.loading ? text : <i className="fa fa-spinner fa-spin"></i>}
    </button>
  );
}

export default DefaultButton;
