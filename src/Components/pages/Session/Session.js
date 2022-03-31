import React from "react"
import Selects from "./Selects"
import SessionOutput from "./SessionOutput"
import "./Session.scss"

const Session = () => {
    return (
            <div className="session">
                <Selects/>
                <SessionOutput/>
            </div>
    )
}

export default Session