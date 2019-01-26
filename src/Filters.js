/** @jsx jsx */
import React from "react";
import { jsx, css } from "@emotion/core";
import styled from "@emotion/styled";

import Checkbox from "./Checkbox";

const categories = [
  {
    id: 1,
    title: "Все"
  },
  {
    id: 2,
    title: "Новые"
  }
];

const users = [
  {
    id: 1,
    title: "Я"
  },
  {
    id: 2,
    title: "Остальные"
  }
];

const Label = styled.label`
  margin-bottom: 5px;
  display: block;
  color: #a4a0a8;
`;

const Section = styled.section`
  flex: 1;
  flex-direction: column;
  padding: 3px;
  &:not(:last-child) {
    margin-right: 10px;
  }
  min-width: 140px;
`;

const Fieldset = styled.div`
  margin-bottom: 10px;
  width: 100%;
`;

const Input = styled.input`
  width: 100%;
  border: none;
  border-radius: 4px 0 0 4px;
  padding: 5px;
  color: #331948;
  flex: 1;
`;

const Select = styled.select`
  width: 100%;
  border: none;
  border-radius: 4px 0 0 4px;
  padding: 5px;
  color: #331948;
  flex: 1;
  cursor: pointer;
`;

const Filters = ({ filter, onChange }) => {
  const {
    costFrom,
    costTo,
    category,
    creator,
    withFriendsWhoGo,
    withFriendsWhoWant,
    withMe
  } = filter;

  return (
    <div
      css={css`
        display: flex;
        justify-content: space-around;
        font-size: 14px;
        margin-top: 20px;
        flex-wrap: wrap;
      `}
    >
      <Section>
        <Fieldset>
          <Label>Стоимость</Label>
          <div
            css={css`
              display: flex;
              flex-wrap: wrap;
            `}
          >
            <Input
              pattern="[0-9]*"
              type="text"
              css={css`
                flex: 1;
              `}
              value={costFrom}
              onChange={e =>
                e.target.validity.valid &&
                !isNaN(Number(e.target.value)) &&
                onChange({ costFrom: Number(e.target.value) })
              }
            />
            <span
              css={css`
                padding: 0 6px;
              `}
            >
              {" – "}
            </span>
            <Input
              pattern="[0-9]*"
              type="text"
              css={css`
                flex: 1;
              `}
              value={costTo}
              onChange={e =>
                e.target.validity.valid &&
                !isNaN(Number(e.target.value)) &&
                onChange({ costTo: Number(e.target.value) })
              }
            />
          </div>
        </Fieldset>
      </Section>
      <Section>
        <Fieldset>
          <Label>Категории</Label>
          <Select
            value={category}
            onChange={e => onChange({ category: e.target.value })}
          >
            {categories.map(item => (
              <option key={item.id} value={item.id}>
                {item.title}
              </option>
            ))}
          </Select>
        </Fieldset>
        <Fieldset>
          <Label>Создал</Label>
          <Select
            value={creator}
            onChange={e => onChange({ creator: e.target.value })}
          >
            {users.map(item => (
              <option key={item.id} value={item.id}>
                {item.title}
              </option>
            ))}
          </Select>
        </Fieldset>
      </Section>
      <Section>
        <Fieldset>
          <Label>Участники</Label>
          <Checkbox
            checked={withFriendsWhoGo}
            onChange={() => onChange({ withFriendsWhoGo: !withFriendsWhoGo })}
            label="Идет кто-то из друзей"
          />
          <Checkbox
            checked={withFriendsWhoWant}
            onChange={() =>
              onChange({ withFriendsWhoWant: !withFriendsWhoWant })
            }
            label="Хочет пойти кто-то из друзей"
          />
          <Checkbox
            checked={withMe}
            onChange={() => onChange({ withMe: !withMe })}
            label="Я хочу пойти"
          />
        </Fieldset>
      </Section>
    </div>
  );
};

export default Filters;
