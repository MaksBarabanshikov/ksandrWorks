import React, {useRef} from "react"
import {SocialData} from "../../../StorageData/SocialData"
import Block from "../../common/Block"
import Button from "../../common/Button";
import "./MailingConstructor.scss"
import edit from "../../../image/mailing/edit.svg"
import trash from "../../../image/mailing/trash.svg"

import EditorMessage from "./EditorMessage";


const MailingConstructor = () => {
    const titleRef = useRef()

    return (
        <Block stylees="mailing-constructor">
            <h5 className="mailing-constructor-title">
                Конструктор сообщений
            </h5>
            <div className="mailing-constructor-main">
                <div className="mailing-constructor-row flex">
                    <div className="mailing-constructor-cell">
                        Рассылка по лидам
                    </div>
                    <div className="mailing-constructor-cell">
                        <div className="mailing-constructor-text">
                            Платформа:
                            <span>{SocialData[0].text}</span>
                        </div>
                        <img className="networkLogo" src={SocialData[0].img} alt=""/>
                    </div>
                    <div className="mailing-constructor-cell">
                        <button>
                            <img src={edit} alt="Изменить"/>
                        </button>
                        <button>
                            <img src={trash} alt="Удалить"/>
                        </button>
                    </div>
                </div>
                <div className="mailing-constructor-new-message">
                    <button className="mailing-add-message">
                        + Новое сообщение
                    </button>
                    <div className="mailing-constructor-drop-add-message">
                        <div className="mailing-constructor-row">
                            <label htmlFor="constructorTitle">
                                <span>Заголовок</span>
                                <input name="constructorTitle" type="text" ref={titleRef}/>
                            </label>
                            <label htmlFor="socialNetwork">
                                <span>Социальная сеть</span>
                                <input name="socialNetwork" type="text" ref={titleRef}/>
                            </label>
                        </div>
                        <div className="mailing-constructor-create">
                            <span>Сообщение</span>

                            <EditorMessage/>
                            <div className="mailing-constructor-row">
                                <div>
                                    #userid
                                </div>
                                <div>
                                    #username
                                </div>
                                <div>
                                    #billingurl
                                </div>
                                <div>
                                    Больше
                                </div>
                            </div>
                            <div className="mailing-constructor-buttons">
                                <Button>
                                    Сохранить
                                </Button>
                                <Button>
                                    Добавить в избранное
                                </Button>
                            </div>
                        </div>

                        <div className="mailing-constructor-drop-favorites favorites">
                            <span>Избранное</span>
                            <ul className="favorites-list">
                                <li className="favorites-list-item">
                                    <div className="favorites-item-text">
                                        <span>Рассылка Telegram BIG</span>
                                        <span>+</span>
                                    </div>
                                    <button>
                                        <img src={trash} alt="Удалить"/>
                                    </button>
                                </li>
                                <li className="favorites-list-item">
                                    <div className="favorites-item-text">
                                        <span>Рассылка Telegram BIG</span>
                                        <span>+</span>
                                    </div>
                                    <button>
                                        <img src={trash} alt="Удалить"/></button>
                                </li>
                                <li className="favorites-list-item">
                                    <div className="favorites-item-text">
                                        <span>Рассылка Telegram BIG</span>
                                        <span>+</span>
                                    </div>
                                    <button>
                                        <img src={trash} alt="Удалить"/>
                                    </button>
                                </li>
                                <li className="favorites-list-item">
                                    <div className="favorites-item-text">
                                        <span>Рассылка Telegram BIG</span>
                                        <span>+</span>
                                    </div>
                                    <button>
                                        <img src={trash} alt="Удалить"/>
                                    </button>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

            </div>
        </Block>
    )
}

export default MailingConstructor



{/*      <div className="mailing-constructor-row">*/}
{/*          <div className="mailing-constructor-cell">*/}
{/*              <button>*/}
{/*                  <img src={bold} alt=""/>*/}
{/*              </button>*/}
{/*              <button>*/}
{/*                  <img src={italic} alt=""/>*/}
{/*              </button>*/}
{/*              <button>*/}
{/*                  <img src={underline} alt=""/>*/}
{/*              </button>*/}
{/*              <button>*/}
{/*                  <img src={textMore} alt=""/>*/}
{/*              </button>*/}
{/*          </div>*/}
{/*          <div className="mailing-constructor-cell">*/}
{/*              <button>*/}
{/*                  <img src={alignLeft} alt=""/>*/}
{/*              </button>*/}
{/*              <button>*/}
{/*                  <img src={alignCenter} alt=""/>*/}
{/*              </button>*/}
{/*              <button>*/}
{/*                  <img src={orderedList} alt=""/>*/}
{/*              </button>*/}
{/*          </div>*/}
{/*          <div className="mailing-constructor-cell">*/}
{/*              <button>*/}
{/*                  <img src={insertLink} alt=""/>*/}
{/*              </button>*/}
{/*              <button>*/}
{/*                  <img src={insertImage} alt=""/>*/}
{/*              </button>*/}
{/*              <button>*/}
{/*                  <img src={smile} alt=""/>*/}
{/*              </button>*/}
{/*          </div>*/}
{/*      </div>*/}
{/*      <div contentEditable={true} className="mailing-constructor-textarea" defaultValue="Привет!">*/}
{/*</div>*/}