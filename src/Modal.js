import React, { Component } from "react";
import { css, cx } from "emotion";
import classNames from "classnames";

import UniqButton from "./UniqButton.js";
import UniqFillForText from "./UniqFillForText.js";
import DropdownMenu from "./DropdownMenu";

const modal = css`
{
  z-index: 9999;
  position: absolute;
  top: 50%;
  left: 50%;
  min-width: 700px;
  min-height: 498px;
  padding: 15px;
  border-radius: 10px;
  transform: translate(-50%, -50%);
  background: #fff;
}
`;

const bg = css`
{
  z-index: 9998;
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.3);
}
`;

const textField = css`
{
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    flex-direction: column;
    min-height: 350px;
}
`;

const buttons = css`
{
    display: flex;
    justify-content: space-between;
    margin-right: 420px;
    flex-wrap: nowrap;
    margin-top: 70px;
}
`;

const header = css`
{
    display: flex;
    justify-content: space-between;
    flex-wrap: nowrap;
}
`;

const Dropdown = css`
{
    margin-top: 20px;
}
`;

//{this.props.children}
class Modal extends React.Component {
    render() {

        if (this.props.isOpen === false)
            return null
    
        return (
            <div>
            <div className={modal}>
                <div className={header}>
                    <h2>
                    Редактирование информации о встречче
                    </h2>
                    <UniqButton
                    eventOnClick = {e => this.close(e)}
                    />
                </div>

                <div className={textField}>
                    <UniqFillForText
                    name="Название"
                    typeInput="place"
                    placeholder="Название встречи"
                    />
                
                    <UniqFillForText
                    name="Дата и время"
                    typeInput="place"
                    value="11:11"
                    />
                
                    <UniqFillForText
                    name="Место"
                    typeInput="place"
                    placeholder="Напишите где находится"
                    />
                
                    <UniqFillForText
                    name="Описание"
                    typeInput="place"
                    placeholder="Не забудь про печеньки!"
                    />
                    <div className={Dropdown}>
                    <DropdownMenu
                    name = "Могут присоедениться"
                    items={[
                    {
                        title: "Только по приглашениям",
                    },
                    {
                        title: "Еще как-то",
                    }
                    ]}
                    />
                    </div>
                </div>
                <div className={buttons}>
                    <UniqButton
                    name="Сохранить изменения"
                    type="active"
                    inversion="0"
                    />
                    <UniqButton
                    name="Отмена"
                    type="deactive"
                    inversion="2"
                />
                </div>
            </div>
            <div className={bg} onClick={e => this.close(e)}/>
            </div>
        )
    }
  
    close(e) {
      e.preventDefault()
  
      if (this.props.onClose) {
        this.props.onClose()
      }
    }
  }

  export default Modal;