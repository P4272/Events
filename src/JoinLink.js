/** @jsx jsx */
import React from "react";
import { jsx, css } from "@emotion/core";

const JoinLink = ({ onClick }) => {
  return (
    <a
      href="#"
      onClick={e => {
        e.preventDefault();
        onClick && onClick(e);
      }}
      css={css`
        display: flex;
        align-items: center;
        font-size: 16px;
        color: #331948;
        margin-bottom: 12px;
        text-decoration: none;
        &:hover .joinLink {
          text-decoration: underline;
        }
        &:hover .joinIcon {
          font-weight: 600;
        }
      `}
    >
      <i
        css={css`
          font-size: 20px;
          margin-right: 8px;
        `}
        className="far fa-star joinIcon"
      />
      <div>
        <span className="joinLink">Хочу пойти</span>
      </div>
    </a>
  );
};

export default JoinLink;
