import React from "react";
import Block from "../../common/Block";
import SocialSelect from "../../SocialSelect/SocialSelect";
import Textarea from "../../common/Textarea";
import Button from "../../common/Button";
import CheckBoxList from "../../CheckboxList/CheckBoxList";
import MailingConstructor from "./MailingConstructor";
import Input from "../../common/Input";
import {checkboxThree, threeCheckboxValue} from "../../../StorageData/checkboxData";
import ProcessWork from "../../ProcessWork/ProcessWork";

const Mailing = () => {
    return (
        <>
            <Block stylees="parsing block left-transparent">
                <SocialSelect page="mailing"/>
                <Block stylees="left">
                    <Block stylees="invite-amount flex">
                        <div className="invite-inputs">
                            <Input isLabel={true} type="text" labelText="Количество аккаунтов для работы:"
                                   defaultValue={5}/>
                            <Input isLabel={true} type="text" labelText="Количество аккаунтов для работы:"
                                   defaultValue={5}/>
                        </div>
                        <div className="invite-button">
                            <p className="invite-text">Загрузить контакты:</p>
                            <Button>
                                Загрузить
                            </Button>
                        </div>
                    </Block>
                    <CheckBoxList checkboxs={checkboxThree} radio={threeCheckboxValue}/>
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
                <MailingConstructor/>
            </Block>
            <ProcessWork/>
        </>
    )
}

export default Mailing