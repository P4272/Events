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
      type="normal"
      inversion="1"
      typeSize="standart"
      eventOnClick=""
  />
  rootElement
);
*/

const basicButton = css`
   {
    text-align: center;
  }
`;
const basicSize = css`
   {
    padding: 4px 12px 8px 12px;
  }
`;
const bigSize = css`
   {
    padding: 12px 16px 16px 16px;
  }
`;
const activeInversionButton = css`
   {
    background-color: #af8cd7;
  }
`;
const activeButton = css`
   {
    background-color: #ff5151;
    box-shadow: 0 0 8px rgba(0, 0, 0, 0.5);
    border-radius: 50px;
    border-width: 0;
  }
`;
const deActiveButton = css`
   {
    background: #fff;
    border-color: #af8cd7;
    border-width: 1px;
    border-radius: 50px;
  }
`;
const styleBasicType = css`
   {
    font: 14px/20px Open Sans, sans-serif;
    white-space: nowrap;
  }
`;
const styleTextActive = css`
   {
    color: #fff;
  }
`;
const styleTextDeActive = css`
   {
    color: #af8cd7;
  }
`;
const styleTextDeActiveInversion = css`
   {
    color: #000;
    border-color: #000;
  }
`;
const normalStyle = css`
   {
    color: #fff;
    background: #af8cd7;
    border-radius: 0 4px 4px 0;
    border-width: 0;
  }
`;
class UniqButton extends Component {
  render() {
    let typeSelection = cx(basicButton, styleBasicType);
    const typeSelectionBasic = cx(basicButton, styleBasicType, basicSize);
    const typeSelectionAction = cx(
      typeSelection,
      activeButton,
      styleTextActive
    );
    const typeSelectionDeAction = cx(typeSelection, deActiveButton);

    const typeSize = this.props.size === "big" ? bigSize : basicSize;

    if (this.props.type === "active" && this.props.inversion === "0") {
      typeSelection = cx(typeSelectionAction, typeSize);
    }
    if (this.props.type === "active" && this.props.inversion === "1") {
      typeSelection = cx(typeSelectionAction, activeInversionButton);
    }
    if (this.props.type === "deactive" && this.props.inversion === "0") {
      typeSelection = cx(typeSelectionDeAction, styleTextDeActive);
    }
    if (this.props.type === "deactive" && this.props.inversion === "1") {
      typeSelection = cx(typeSelectionDeAction, styleTextDeActiveInversion);
    }
    if (this.props.type === "normal") {
      typeSelection = cx(typeSelectionBasic, normalStyle);
    }
    return (
      <button onClick={this.props.onClick} className={typeSelection}>
        {this.props.name}
      </button>
    );
  }
}
export default UniqButton;
