import React, {useState} from "react";
import Interlocutors from "./Interlocutors";
import Dialog from "./Dialog";
import './Chat.scss'
import searchLogo from "../../../image/chat/search.svg"
import Header from "../../header/Header";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSearch} from "@fortawesome/free-solid-svg-icons/faSearch";

const Chat = () => {
    const [person, setPerson] = useState(null)

    const handleSetPerson = person => {
        setPerson(person)
    }

    return (
        <>
            <Header title="Диалоги"/>
            <div className="chat">
                <div className="chat-interlocutors flex-column justify-content-between">
                    <div>
                        <div className="chat-interlocutors-title">
                            <div className="chat-interlocutors-title-text">
                                Собеседники
                            </div>
                        </div>
                        <Interlocutors setDialog={handleSetPerson}/>
                    </div>
                    <div className="chat-footer">
                        <div className="chat-footer-container">
                            <div className="mt-25">
                                <button>
                                    <FontAwesomeIcon icon={faSearch}/>
                                </button>
                                <input type="text" placeholder='Поиск по сообщениям'/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="chat-selected-dialog">
                    <Dialog person={person}/>
                </div>
            </div>
        </>
    )
}

export default Chat