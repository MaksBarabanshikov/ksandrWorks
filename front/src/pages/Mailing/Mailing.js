import React from "react";
import Block from "../../Components/common/Block";
import SocialSelect from "../../Components/SocialSelect/SocialSelect";
import Textarea from "../../Components/common/Textarea";
import Button from "../../Components/common/Button";
import CheckBoxList from "../../Components/CheckboxList/CheckBoxList";
import MailingConstructor from "./MailingConstructor";
import Input from "../../Components/common/Input";
import {checkboxThree, threeCheckboxValue} from "../../StorageData/checkboxData";
import ProcessWork from "../../Components/ProcessWork/ProcessWork";
import Header from "../../Components/header/Header";
import {faEnvelope} from "@fortawesome/free-solid-svg-icons";

const Mailing = () => {
    return (
        <>
            <Header title="Рассылка" icon={faEnvelope}/>
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