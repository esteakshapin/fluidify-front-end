import React from "react";
import "./InputWithLeadingIcon.css";

function InputWithLeadingIcon(props) {
  const iconName = "fa-solid fa-fw " + props.icon;
  const inputId = props.title + "Input";

  return (
    <div className="inputAndTitleContainer">
      <label htmlFor={inputId}>
        <h3>{props.title}</h3>
      </label>

      <div className="inputWithLeadingIcon">
        <input
          name={props.title}
          id={inputId}
          value={props.value}
          placeholder={props.placeholder}
          onChange={props.handleChange}
          type={props.type}
        />
        <i className={iconName}></i>
      </div>
    </div>
  );
}

export default InputWithLeadingIcon;
