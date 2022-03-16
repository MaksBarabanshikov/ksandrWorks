import React from "react";
import CardSelect from "../../CardSelect/CardSelect";
import Block from "../../common/Block";
import Input from "../../common/Input";
import Button from "../../common/Button";
import CheckBoxList from "../../CheckboxList/CheckBoxList";
import {checkboxThree, threeCheckboxValue} from "../../../StorageData/checkboxData";
import Textarea from "../../common/Textarea";

const Checker = () => {
  return(
      <Block stylees="left invite">
          <CardSelect/>
          <Block stylees="invite-amount flex">
              <div className="invite-inputs">
                  <Input isLabel={true} type="text" labelText="Количество аккаунтов для работы:" defaultValue={5}/>
                  <Input isLabel={true} type="text" labelText="Количество аккаунтов для работы:" defaultValue={5}/>
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
  )

}

export default Checker