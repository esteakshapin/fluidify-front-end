import React from 'react'
import './InputWithLeadingIcon.css'

function InputWithLeadingIcon(props) {
    const iconName = "fa-solid fa-fw " + props.icon
    const inputId = props.title + "Input"

    return (
        <div className="inputAndTitleContainer">
            <h3>{props.title}</h3>

            <div className="inputWithLeadingIcon">
                <input name={props.title} id={inputId} />
                <i className={iconName}></i>
            </div>
        </div>
    );
}

export default InputWithLeadingIcon;