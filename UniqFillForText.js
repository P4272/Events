import React, { Component } from "react";
import { css, cx } from "emotion";

/**
import React from "react";
import ReactDOM from "react-dom";

import UniqFillForText from "./UniqFillForText.js";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <UniqFillForText name="Место" placeholder="Введите название" value="" />,
  rootElement
);
 */

const textStyle = css`
   {
    color: #a4a0a8;

    font-family: Open Sans;
    font-style: normal;
    font-weight: normal;
    line-height: 20px;
    font-size: 14px;
  }
`;

const standartInputStyle = css`
   {
    width: 100%;
    height: 100%;

    margin-top: 8px;
    padding-left: 12px;
    padding-bottom: 4px;

    border-color: #d4d5e5;
    border-radius: 4px;
    border-width: 1px;
  }
`;

class UniqFillForText extends Component {
  render() {
    return (
      <div className={textStyle}>
        <div>{this.props.name}</div>
        <input
          type="text"
          placeholder={this.props.placeholder}
          className={cx(textStyle, standartInputStyle)}
          value={this.props.value}
        />
      </div>
    );
  }
}
export default UniqFillForText;
