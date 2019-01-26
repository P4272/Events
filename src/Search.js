/** @jsx jsx */
import React, { Component } from "react";
import { jsx, css } from "@emotion/core";
import classNames from "classnames";

class Search extends Component {
  state = {
    opened: false
  };

  toggle = opened => this.setState({ opened });

  render() {
    const { value, onChange, onSubmit, filters } = this.props;
    const { opened } = this.state;

    return (
      <div
        css={css`
          display: flex;
          flex-direction: column;
          background-color: #edebf8;
          border: 1px solid #e0e0ef;
          border-radius: 4px;
          padding: 20px;
          font-size: 14px;
          color: #331948;
          overflow: auto;
        `}
      >
        <div
          css={css`
            display: flex;
            width: 100%;
            justify-content: space-between;
            align-items: flex-end;
            flex-wrap: wrap;
          `}
        >
          <div
            css={css`
              flex: 1;
            `}
          >
            <label
              css={css`
                display: inline-block;
                padding-bottom: 4px;
                color: #a4a0a8;
              `}
              htmlFor="search"
            >
              Поиск
            </label>
            <div
              css={css`
                display: flex;
              `}
            >
              <input
                id="search"
                type="text"
                value={value}
                onChange={e => onChange && onChange(e.target.value)}
                placeholder="Название события"
                css={css`
                  border: none;
                  border-radius: 4px 0 0 4px;
                  padding: 5px 10px;
                  color: #331948;
                  flex: 1;
                `}
              />
              <button
                css={css`
                  background-color: #af8cd7;
                  border: none;
                  color: #fff;
                  padding: 0 18px;
                  cursor: pointer;
                  border-radius: 0 4px 4px 0;
                `}
                onClick={onSubmit}
              >
                Найти
              </button>
            </div>
          </div>
          {filters && (
            <div
              css={css`
                padding: 10px 0px 3px 20px;
                cursor: pointer;
                user-select: none;
              `}
              onClick={() => this.toggle(!opened)}
            >
              Показать фильтры
              <i
                css={css`
                  font-size: 10px;
                  vertical-align: middle;
                  margin-left: 5px;
                  user-select: none;
                `}
                className={classNames(
                  "fas",
                  opened ? "fa-chevron-up" : "fa-chevron-down"
                )}
              />
            </div>
          )}
        </div>
        {opened && filters && <div>{filters}</div>}
      </div>
    );
  }
}

export default Search;
