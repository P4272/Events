/** @jsx jsx */
import React from "react";
import { jsx, css } from "@emotion/core";
import classNames from "classnames";

const Checkbox = ({ checked, label, onChange }) => {
  return (
    <div
      onClick={onChange}
      css={css`
        cursor: pointer;
        display: flex;
        align-items: center;
        padding: 5px 0;
      `}
    >
      <i
        css={css`
          margin-right: 5px;
          font-size: 20px;
          color: #af8cd7;
        `}
        className={classNames("fas", checked ? "fa-check-square" : "fa-square")}
      />
      <span>{label}</span>
    </div>
  );
};

export default Checkbox;
