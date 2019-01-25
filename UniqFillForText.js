import React, { Component } from "react";
import { css, cx } from "emotion";

/**
import React from "react";
import ReactDOM from "react-dom";

import UniqFillForText from "./UniqFillForText.js";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <UniqFillForText
    name="ÐÐµÑÑÐ¾"
    typeInput="place"
    placeholder="ÐÐ°Ð¿Ð¸ÑÐ¸ÑÐµ Ð³Ð´Ðµ Ð½Ð°ÑÐ¾Ð´Ð¸ÑÑÑ"
    value=""
  />
);
 */

const base = css`
   {
    display: flex;
    flex-wrap: wrap;
  }
`;
const textStyle = css`
   {
    color: #a4a0a8;

    font: 14px/20px Open Sans, sans-serif;
    white-space: nowrap;
  }
`;

const labelPlace = css`
   {
    width: 100%;
    margin-bottom: 8px;
  }
`;

const labelTitle = css`
   {
    width: 148px;
    padding: 4px 12px 8px 0px;
  }
`;

const standartInputStyle = css`
   {
    padding: 4px 12px 8px 12px;

    border-color: #d4d5e5;
    border-radius: 4px;
    border-width: 1px;
    box-sizing: border-box;
  }
`;

const inputPlace = css`
   {
    flex-grow: 1;
  }
`;

const inputTitle = css`
   {
    flex-grow: 1;
  }
`;
/**ÐÐ°Ð·Ð²Ð°Ð½Ð¸Ðµ Ð²ÑÑÑÐµÑÐ¸ (Ð¼ÐµÐ»ÐºÐ¸Ð¹ ÑÐ°Ð·Ð¼ÐµÑ input)
 * ÐÐ°Ð·Ð²Ð°Ð½Ð¸Ðµ ÑÐ¾Ð±ÑÑÐ¸Ñ (Ð¿Ð¾Ð»Ð½ÑÐ¹ ÑÐ°Ð·Ð¼ÐµÑ input)
 * ÐÐµÑÑÐ¾ (ÐÐ°ÑÐ¾Ð´Ð¸ÑÑÑ Ð½Ð°Ð´ Ð¿Ð¾Ð»ÐµÐ¼)
 */

class UniqFillForText extends Component {
  render() {
    const id = Date.now().toString(36) + Math.random().toString(36);
    const typeIn = this.props.typeInput;
    const classNameTypeLabel =
      typeIn === "title"
        ? labelTitle
        : typeIn === "place"
        ? labelPlace
        : new Error();
    const classNameTypeInput =
      typeIn === "title"
        ? inputTitle
        : typeIn === "place"
        ? inputPlace
        : new Error();

    return (
      <div className={base}>
        <label for={id} className={cx(textStyle, classNameTypeLabel)}>
          {this.props.name}
        </label>
        <input
          id={id}
          type="text"
          placeholder={this.props.placeholder}
          className={cx(textStyle, classNameTypeInput, standartInputStyle)}
          value={this.props.value}
        />
      </div>
    );
  }
}
export default UniqFillForText;
