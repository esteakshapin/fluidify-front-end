import React from "react";
import { useEffect } from "react";
import { useRef } from "react";
import { useState } from "react";
import "./InputWithLeadingIcon.css";
import "./toolTip.css";

function InputWithLeadingIcon(props) {
  const iconName = !props.noIconPreset
    ? "fa-solid fa-fw " + props.icon
    : props.icon;
  const inputId = props.title + "Input";
  const toggleRef = useRef(null);
  const [toggleState, setToggleState] = useState(false);

  useEffect(() => {
    console.log("mounted " + inputId);
    if (toggleRef.current && props.toggleState != null) {
      toggleRef.current.checked = props.toggleState;
      setToggleState(props.toggleState);
    }
  }, [props.toggleState]);

  return (
    <div className="inputAndTitleContainer">
      <label htmlFor={inputId} className="inputTitle">
        <h3>
          {props.title}{" "}
          {props.toolTipData ? (
            <div
              data-tooltip={props.toolTipData}
              style={{ display: "inline-block" }}
            >
              <i className="fa-solid fa-circle-info text-light"></i>
            </div>
          ) : null}
        </h3>

        {/* borrowed from w3school */}
        {props.toggle ? (
          <label className="switch">
            <input
              type="checkbox"
              ref={toggleRef}
              onClick={(e) => {
                setToggleState(e.target.checked);
                if (props.toggleCallBack) {
                  props.toggleCallBack(e.target.checked);
                }
              }}
            />
            <span className="slider round"></span>
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
            className={props.inputError ? "inputError" : null}
            disabled={props.disabled}
          />
          <i class={iconName}></i>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
}

export default InputWithLeadingIcon;
