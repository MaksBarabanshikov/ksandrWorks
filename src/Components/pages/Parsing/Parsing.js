import React from "react"
import SocialSelect from "../../SocialSelect/SocialSelect"
import Block from "../../common/Block"
import Button from "../../common/Button"
import Textarea from "../../common/Textarea";
import CheckBoxList from "../../CheckboxList/CheckBoxList"
import ParsingResults from "./ParsingResults"
import {checkboxFour, checkboxTwo, fourCheckboxValue, twoCheckboxValue} from "../../../StorageData/checkboxData";
import {resultsData} from "../../../StorageData/resultsData";
import "./Parsing.scss"

const Parsing = () => {
    return (
        <Block stylees="parsing block left-transparent">
            <SocialSelect page="parsing"/>
            <Block stylees="left">
                <Textarea stylees="parsing-row" label="Логины чатов:">
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
                </Textarea>
                <Block stylees="parsing-users">
                    <Block stylees="parsing-block">
                        <p className="parsing-title">Категория пользователей:</p>
                        <CheckBoxList checkboxs={checkboxFour} radio={fourCheckboxValue}/>
                    </Block>
                </Block>
                <Block stylees="parsing-parse column">
                    <p className="parsing-title">Парсить:</p>
                    <CheckBoxList checkboxs={checkboxTwo} radio={twoCheckboxValue}/>
                </Block>
                <Block stylees="parsing-btn">
                    <Button>
                        Запустить
                    </Button>
                </Block>
                <Block stylees="parsing-results">
                    <p className="parsing-title">Все результаты:</p>
                    <ParsingResults results={resultsData}/>
                </Block>
            </Block>
        </Block>
    )
}

export default Parsing