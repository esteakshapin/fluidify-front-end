import React from "react";
import "./DefaultButton.css";

function DefaultButton(props) {
  const btnClass = "DefaultButton " + props.btnClass;

  return (
    <button type="button" className={btnClass} onclick={props.onclickFunction}>
      {props.text != null ? props.text : "Submit"}
    </button>
  );
}

export default DefaultButton;
