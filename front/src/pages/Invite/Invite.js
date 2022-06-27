import React from "react";
import CardSelect from "../../Components/CardSelect/CardSelect";
import Block from "../../Components/common/Block";
import Input from "../../Components/common/Input";
import Button from "../../Components/common/Button";
import CheckBoxList from "../../Components/CheckboxList/CheckBoxList";
import Textarea from "../../Components/common/Textarea";
import {checkboxThree,threeCheckboxValue} from "../../StorageData/checkboxData";
import {faUserPlus} from "@fortawesome/free-solid-svg-icons/faUserPlus";
import "./Invite.scss";
import ProcessWork from "../../Components/ProcessWork/ProcessWork";
import Header from "../../Components/header/Header";


const Invite = () => {
  return(
      <>
          <Header title="Инвайтинг" icon={faUserPlus}/>
          <Block stylees="left invite">
              <CardSelect/>
              <Block stylees="invite-amount flex">
                  <div className="invite-inputs">
                      <Input isLabel={true} type="text" labelText="Количество инвайтов на аккаунт" defaultValue={5}/>
                      <Input isLabel={true} type="text" labelText="Количество сообщений на аккаунт" defaultValue={5}/>
                  </div>
                  <div className="invite-button">
                      <p className="invite-text">Загрузить контакты:</p>
                      <Button>
                          Загрузить
                      </Button>
                  </div>
              </Block>
              <CheckBoxList checkboxs={checkboxThree} radio={threeCheckboxValue} />
              <Block stylees="invite-big-inputs flex">
                  <Textarea stylees="invite-big-input" label="Логин чата для инвайтинга:"/>
                  <Textarea stylees="invite-big-input" label="Избранное:"/>
              </Block>
              <Block stylees="invite-btn">
                  <Button>
                      Запустить
                  </Button>
              </Block>
          </Block>
          <ProcessWork/>
      </>

  )
}

export default Invite