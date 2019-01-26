/** @jsx jsx */
import React from "react";
import { jsx, css } from "@emotion/core";

const Avatar = ({ src, name }) => {
  return (
    <div
      css={css`
        display: flex;
        align-items: center;
        font-size: 16px;
        color: #331948;
        margin-bottom: 12px;
        cursor: pointer;
        &:hover .avatarName {
          text-decoration: underline;
        }
      `}
    >
      <div
        css={css`
          background-image: url(${src});
          min-width: 48px;
          width: 48px;
          height: 48px;
          border-radius: 50%;
          overflow: hidden;
          background-size: cover;
          background-position: center center;
          background-color: #dddcdd;
          margin-right: 12px;
        `}
      />
      <div>
        <span className="avatarName">{name}</span>
      </div>
    </div>
  );
};

export default Avatar;
