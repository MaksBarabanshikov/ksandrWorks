import React from "react"
import Selects from "./Selects"
import SessionOutput from "./SessionOutput"
import "./Session.scss"
import Header from "../../Components/header/Header";
import {faStopwatch} from "@fortawesome/free-solid-svg-icons";

const Session = () => {
    return (
        <>
            <Header title="Сессии" icon={faStopwatch}/>
            <div className="session">
                <Selects/>
                <SessionOutput/>
            </div>
        </>

    )
}

export default Session