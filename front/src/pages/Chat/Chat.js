import React, {useState} from "react";
import Interlocutors from "./Interlocutors";
import Dialog from "./Dialog";
import './Chat.scss'
import searchLogo from "../../image/chat/search.svg"
import Header from "../../Components/header/Header";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSearch} from "@fortawesome/free-solid-svg-icons/faSearch";
import {faComment} from "@fortawesome/free-solid-svg-icons";

const Chat = () => {
    const [person, setPerson] = useState(null)

    const handleSetPerson = person => {
        setPerson(person)
    }

    return (
        <>
            <Header title="Диалоги" icon={faComment}/>
            <div className="chat">
                <div className="chat-interlocutors flex-column justify-content-between">
                    <div>
                        <div className="chat-interlocutors-title">
                            <div className="chat-interlocutors-title-text">
                                Собеседники
                            </div>
                            <div className="chat-interlocutors-search">
                                <button>
                                    <FontAwesomeIcon icon={faSearch}/>
                                </button>
                                <input type="text" placeholder='Поиск по сообщениям'/>
                            </div>
                        </div>
                        <Interlocutors setDialog={handleSetPerson}/>
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