import React, {useState} from "react";
import Interlocutors from "./Interlocutors";
import Dialog from "./Dialog";
import './Chat.scss'
import searchLogo from "../../../image/chat/search.svg"

const Chat = () => {
    const [person, setPerson] = useState(null)

    const handleSetPerson = person => {
        setPerson(person)
        console.log(person)
    }

  return(
      <>
          <div className="chat">
              <div className="chat-interlocutors">
                    <div className="chat-interlocutors-title">
                        <div className="chat-interlocutors-title-text">
                            Собеседники
                        </div>
                    </div>
                  <Interlocutors setDialog={ handleSetPerson }/>
                  <div className="chat-footer">
                      <div className="chat-footer-container">
                          <form className="chat-footer-form">
                              <button>
                                  <img src={searchLogo} alt=""/>
                              </button>
                              <input type="text" placeholder='Поиск по сообщениям'/>
                          </form>
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