import React from "react";
import "./PaperContainer.css";

function PaperContainer(props) {
  return <div className="paperContianer">{props.children}</div>;
}

export default PaperContainer;
