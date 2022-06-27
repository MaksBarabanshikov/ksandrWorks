import React from "react";
import Block from "../../Components/common/Block"
import CardSelect from "../../Components/CardSelect/CardSelect";
import Input from "../../Components/common/Input";
import Button from "../../Components/common/Button";
import "./Autoreg.scss"
import ProcessWork from "../../Components/ProcessWork/ProcessWork";
import Header from "../../Components/header/Header";
import {faKey} from "@fortawesome/free-solid-svg-icons/faKey";



const Autoreg = () => {
    return (
        <>
            <Header title="Авторег" icon={faKey}/>
            <Block stylees="left">
                <CardSelect/>
                <Block stylees="column-amount">
                    <p className="block-title">Количество аккаунтов для регистрации:</p>
                    <Input placeholder="5"/>
                    <Button>Запустить</Button>
                </Block>
                <Block stylees="column-reg">
                    <p className="block-title">Регистрация с помощью личных номеров:</p>
                    <Block stylees="flex row-reg">
                        <Input stylees="reg-tel" isLabel={true} labelText="Номер Телефона" placeholder={null}/>
                        <Input stylees="reg-tel-code" isLabel={true} labelText="Код" placeholder={null}/>
                        <Button>Регистрация</Button>
                    </Block>
                </Block>
            </Block>
            <ProcessWork/>
        </>
    )
}

export default Autoreg