import React from "react"
import Selects from "./Selects"
import SessionOutput from "./SessionOutput"
import "./Session.scss"
import Header from "../../header/Header";

const Session = () => {
    return (
        <>
            <Header title="Сессии"/>
            <div className="session">
                <Selects/>
                <SessionOutput/>
            </div>
        </>

    )
}

export default Session