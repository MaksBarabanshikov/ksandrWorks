import Block from "../../common/Block";
import Textarea from "../../common/Textarea";
import Button from "../../common/Button";
import CheckBoxList from "../../CheckboxList/CheckBoxList";
import {checkboxFour, checkboxTwo, fourCheckboxValue, twoCheckboxValue} from "../../../StorageData/checkboxData";
import ParsingResults from "../Parsing/ParsingResults";
import {resultsData} from "../../../StorageData/resultsData";
import React from "react";
import CardSelect from "../../CardSelect/CardSelect";
import ProcessWork from "../../ProcessWork/ProcessWork";


const Checker = () => {
  return(
      <>
          <Block stylees="left">
              <CardSelect/>
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
          <ProcessWork/>
      </>
  )

}

export default Checker