import React from "react";
import { useState } from "react";
import "./InputWithLeadingIcon.css";

function InputWithLeadingIcon(props) {
  const iconName = "fa-solid fa-fw " + props.icon;
  const inputId = props.title + "Input";
  const [toggleState, setToggleState] = useState(false);

  return (
    <div className="inputAndTitleContainer">
      <label htmlFor={inputId} className="inputTitle">
        <h3>{props.title}</h3>

        {/* borrowed from w3school */}
        {props.toggle ? (
          <label class="switch">
            <input
              type="checkbox"
              onClick={(e) => setToggleState(e.target.checked)}
            />
            <span class="slider round"></span>
          </label>
        ) : (
          <div></div>
        )}
      </label>

      {!props.toggle || toggleState ? (
        <div className="inputWithLeadingIcon">
          <input
            name={props.title}
            id={inputId}
            value={props.value}
            placeholder={props.placeholder != null ? props.placeholder : ""}
            onChange={props.handleChange}
            type={props.type != null ? props.type : ""}
          />
          <i className={iconName}></i>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
}

export default InputWithLeadingIcon;
