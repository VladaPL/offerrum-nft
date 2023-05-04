import React, { Component } from "react";
import "./green-button.scss";

export default class GreenButton extends Component {
    
    render() {
        const onClickHandler = this.props.onClick || (() => {});
        const text = this.props.text || "";

        return (
            <button className="green-button" onClick={onClickHandler}>
                {text}
            </button>
        );
    }
}
