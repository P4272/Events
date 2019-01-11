import React, { Component } from "react";
import { css, cx } from "emotion";

/**UniqButton
 * name - имя, отображаемое на кнопке
 * type - (active, deactive, normal) - тип кнопки, указывающий предназначение и стиль,
 * - active - красная, для "присоединиться" "повторить" "создать встречу" ...
 * - deactive - фиолетовый кант, внутри белая, для кнопки "подробнее" "редактировать"
 * - normal - только для фиолетовой кнопки "найти"
 * inversion - (0,1) позволяет изменить только цветовое отображение кнопки
 * - 0 - базовые описанные типы
 * - 1 - изменение active в фиолетовый цвет
 *     - изменение deactive в чёрный цвет
 * src - ссылка на страницу, если для кнопки требуется переход
 * eventOnClick - событие, куда передаётся скрипт, чтобы кнопка что-то делали при нажатии
 */

/**использовать так
import React from "react";
import ReactDOM from "react-dom";

import UniqButton from "./UniqButton.js";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <UniqButton
    name="Отмена"
    type="deactive"
    inversion="0"
    src=""
    eventOnClick=""
  />,
  rootElement
);
*/

const basicButt = css`
   {
    width: 100%;
    height: 100%;

    text-align: center;

    margin-left: 24px;
    margin-right: 24px;
    margin-top: 8px;
    margin-right: 8px;
  }
`;
const activeInversionButt = css`
   {
    background-color: #af8cd7;
  }
`;
const deActiveInversionButt = css`
   {
    color: #000;
    border-color: #000;
  }
`;
const activeButt = css`
   {
    background-color: #ff5151;
    box-shadow: 0 0 8px rgba(0, 0, 0, 0.5);
    border-radius: 50px;
    border-width: 0;
  }
`;
const deActiveButt = css`
   {
    background: #fff;
    border-color: #af8cd7;
    border-width: 1px;
    border-radius: 50px;
  }
`;
const normalButt = css`
   {
    background: #af8cd7;
    border-radius: 0 4px 4px 0;
    border-width: 0;
  }
`;
const basicTypeAddress = css`
   {
    font-weight: light;
    text-decoration: none;
  }
`;
const activeTypeAddress = css`
   {
    color: #fff;
  }
`;
const deActiveInversionTypeAddress = css`
   {
    color: #000;
  }
`;
const deActiveTypeAddress = css`
   {
    color: #af8cd;
  }
`;
const normalTypeAddress = css`
   {
    color: #fff;
  }
`;
class UniqButton extends Component {
  render() {
    if (this.props.type === "active" && this.props.inversion === "0") {
      return (
        <button
          onClick={this.props.onClick}
          className={cx(basicButt, activeButt)}
        >
          <a
            href={this.props.src}
            className={cx(basicTypeAddress, activeTypeAddress)}
          >
            {this.props.name}
          </a>
        </button>
      );
    }
    if (this.props.type === "active" && this.props.inversion === "1") {
      return (
        <button
          onClick={this.props.onClick}
          className={cx(basicButt, activeButt, activeInversionButt)}
        >
          <a
            href={this.props.src}
            className={cx(basicTypeAddress, activeTypeAddress)}
          >
            {this.props.name}
          </a>
        </button>
      );
    }
    if (this.props.type === "deactive" && this.props.inversion === "0") {
      return (
        <button
          onClick={this.props.onClick}
          className={cx(basicButt, deActiveButt)}
        >
          <a
            href={this.props.src}
            className={cx(basicTypeAddress, deActiveTypeAddress)}
          >
            {this.props.name}
          </a>
        </button>
      );
    }
    if (this.props.type === "deactive" && this.props.inversion === "1") {
      return (
        <button
          onClick={this.props.onClick}
          className={cx(basicButt, deActiveButt, deActiveInversionButt)}
        >
          <a
            href={this.props.src}
            className={cx(basicTypeAddress, deActiveInversionTypeAddress)}
          >
            {this.props.name}
          </a>
        </button>
      );
    }
    if (this.props.type === "normal") {
      return (
        <button
          onClick={this.props.onClick}
          className={cx(basicButt, normalButt)}
        >
          <a
            href={this.props.src}
            className={cx(basicTypeAddress, normalTypeAddress)}
          >
            {this.props.name}
          </a>
        </button>
      );
    }
  }
}
export default UniqButton;
