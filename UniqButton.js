import React, { Component } from "react";
import { css, cx } from "emotion";

const basicButton = css`
   {
    text-align: center;
  }
`;
const basicSize = css`
   {
    padding: 6px 16px 6px 16px;
  }
`;
const bigSize = css`
   {
    padding: 14px 20px 14px 20px;
  }
`;
const mainInversionButton = css`
   {
    background-color: #af8cd7;
  }
`;
const mainButton = css`
   {
    background-color: #ff5151;
    box-shadow: 0 0 8px rgba(0, 0, 0, 0.5);
    border-radius: 50px;
    border-width: 0;
  }
`;
const negativeButton = css`
   {
    background: #fff;
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
const styleNegative = css`
   {
    border-color: #af8cd7;
    color: #af8cd7;
  }
`;
const styleNegativeInversion = css`
   {
    color: #000;
    border-color: #000;
  }
`;
const styleNegativeRed = css`
   {
    color: #ff5151;
    border-color: #ff5151;
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
    const typeSelectionMain = cx(typeSelection, mainButton, styleTextActive);
    const typeSelectionNegative = cx(typeSelectionBasic, negativeButton);

    const typeSize = this.props.size === "big" ? bigSize : basicSize;
    const type = this.props.type;
    const version = this.props.version;

    if (type === "main") {
      let ts = [typeSelectionMain];
      version === "0"
        ? ts.push(typeSize)
        : ts.push(mainInversionButton, basicSize);
      typeSelection = cx(ts);
    }
    if (type === "negative") {
      let ts = [typeSelectionNegative];
      if (version === "0") {
        ts.push(styleNegative);
      }
      if (version === "1") {
        ts.push(styleNegativeInversion);
      }
      if (version === "2") {
        ts.push(styleNegativeRed);
      }
      typeSelection = cx(ts);
    }
    if (type === "find") {
      typeSelection = cx(typeSelectionBasic, normalStyle);
    }
    return (
      <button
        type="button"
        onClick={this.props.onClick}
        className={typeSelection}
      >
        {this.props.name}
      </button>
    );
  }
}
export default UniqButton;
