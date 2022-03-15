import React from "react"
import SocialSelect from "../../SocialSelect/SocialSelect"
import Block from "../../common/Block"
import Input from "../../common/Input"
import Button from "../../common/Button"
import CheckBoxList from "../../CheckboxList/CheckBoxList"
import ParsingResults from "./ParsingResults"
import "./Parsing.scss"

const Parsing = () => {
    const checkboxFour =  [
        {id: 1 , isLabel: true, labelText: "Все", type: "checkbox", checked: "checked" },
        {id: 2 , isLabel: true, labelText: "Онлайн", type: "checkbox", checked: "checked" },
        {id: 3 , isLabel: true, labelText: "Были недавно", type: "checkbox", checked: "checked" },
        {id: 4 , isLabel: true, labelText: "Писали в чате", type: "checkbox", checked: "checked" }
    ]
    return (
        <Block stylees="parsing block left-transparent">
            <SocialSelect/>
            <Block stylees=" left">
                <Block stylees="parsing-row flex big-input">
                    <Input isLabel={true} type="text" labelText="Логины чатов:"
                           placeholder="https://t.me/jackk_man"/>
                    <Block stylees="parsing-column">
                        <Block stylees="parsing-block-btn big-input">
                            <p className="parsing-text">Список чатов:</p>
                            <Button>
                                Загрузить
                            </Button>
                        </Block>
                        <Block stylees="parsing-block-btn">
                            <p className="parsing-text">Скачать результат:</p>
                            <Button>
                                Скачать
                            </Button>
                        </Block>

                    </Block>
                </Block>
                <Block stylees="parsing-users">
                    <Block stylees="parsing-row flex">
                        <p className="parsing-title">Категория пользователей:</p>
                        <CheckBoxList data={checkboxFour}/>
                    </Block>
                </Block>
                <Block stylees="parsing-parse column">
                    <p className="parsing-title">Парсить:</p>
                    <CheckBoxList/>
                </Block>
                <Block stylees="parsing-btn">
                    <Button>
                        Запустить
                    </Button>
                </Block>
                <Block stylees="parsing-results">
                    <p className="parsing-title">Все результаты:</p>
                    <Block stylees="results">
                        <ParsingResults/>
                    </Block>
                </Block>
            </Block>
        </Block>
    )
}

export default Parsing