import React from "react";
import Block from "../../common/Block"
import CardSelect from "../../CardSelect/CardSelect";
import Input from "../../common/Input";
import Button from "../../common/Button";
import "./Autoreg.scss"
import ProcessWork from "../../ProcessWork/ProcessWork";


const Autoreg = () => {
    return (
        <>
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