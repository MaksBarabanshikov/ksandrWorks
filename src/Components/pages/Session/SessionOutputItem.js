const SessionOutputItem = ({session, setChecked}) => {

    return (
        <div className={`session-main-row ${session.checked? "checked": ""}`}>
            <div className="session-cell">
                <input
                    type="checkbox"
                    checked={session.checked}
                    onChange={() => setChecked(session.id)}/>
            </div>
            <div className="session-cell">
                <img src={session.img} alt=""/>
            </div>
            <div className="session-cell">
                <span>{session.fio}</span>
            </div>
            <div className="session-cell">
                <span>{session.tel}</span>
            </div>
            <div className="session-cell">
                <span>{session.country}</span>
            </div>
            <div className="session-cell">
                <span>{session.status}</span>
            </div>
            <div className="session-cell">
                <span>{session.days}</span>
            </div>
            <div className="session-cell">
                <span>{session.invite}</span>
            </div>
            <div className="session-cell">
                <span>{session.mailing}</span>
            </div>
            <div className="session-cell">
                <span>{session.type}</span>
            </div>
            <div className="session-cell">
                <span>{session.reg}</span>
            </div>
        </div>
    )
}

export default SessionOutputItem