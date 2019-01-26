/** @jsx jsx */
import React, { Component } from "react";
import { jsx, css } from "@emotion/core";
import classNames from "classnames";

class DropdownMenu extends Component {
  state = {
    opened: false
  };

  toggle = opened => this.setState({ opened });

  render() {
    const { name } = this.props;
    const { opened } = this.state;
    const { items } = this.props;

    return (
      <div
        css={css`
          position: relative;
          font-size: 16px;
          height: 36px;
          cursor: pointer;
          text-align: center;
          user-select: none;
        `}
      >
        <div
          onClick={() => this.toggle(!opened)}
          css={css`
            position: absolute;
            left: 0;
            right: 0;
            top: 0;
            z-index: 999;
            background-color: ${opened ? "#EC4C4C" : "#fd5e5e"};
            padding: 0px 30px;
            border-radius: 100px;
            color: #fff;
            height: 36px;
            display: flex;
            justify-content: center;
            align-items: center;
            box-shadow: 0 3px 6px rgba(236, 76, 76, 0.25),
              0 10px 10px rgba(236, 76, 76, 0.22);
            &:hover {
              background-color: #ec4c4c;
            }
          `}
        >
          <span
            css={css`
              margin-right: 6px;
            `}
          >
            {this.props.name}
          </span>
          <i
            css={css`
              font-size: 10px;
              vertical-align: middle;
            `}
            className={classNames(
              "fas",
              opened ? "fa-chevron-up" : "fa-chevron-down"
            )}
          />
        </div>
        {opened && (
          <div
            css={css`
              position: absolute;
              left: 0;
              right: 0;
              top: 0;
              padding-top: 36px;
              box-shadow: 0 3px 6px rgba(236, 76, 76, 0.25),
                0 10px 10px rgba(236, 76, 76, 0.22);
              border-radius: 20px;
              background-color: #fff;
              z-index: 998;
            `}
          >
            {items.map(({ title, onClick }) => (
              <div
                css={css`
                  background-color: #fff;
                  padding: 0px 15px;
                  color: #fd5e5e;
                  height: 36px;
                  display: flex;
                  justify-content: flex-start;
                  align-items: center;
                  &:hover {
                    background-color: #ddd;
                  }
                  &:not(:last-child) {
                    border-bottom: 1px solid #fff0f0;
                  }
                  &:last-child {
                    border-radius: 0 0 20px 20px;
                  }
                `}
                onClick={e => {
                  this.toggle(false);
                  onClick && onClick(e);
                }}
              >
                {title}
              </div>
            ))}
          </div>
        )}
      </div>
    );
  }
}

export default DropdownMenu;
