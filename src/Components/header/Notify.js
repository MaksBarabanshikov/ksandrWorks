import "./Notify.scss"
import inactiveLogo from "../../image/header/notify/info_light.svg"
import recommendationLogo from "../../image/header/notify/lamp_light.svg"

const Notify = ({notify, visibility, removeNotify}) => {
    const correctImage = status => {
        switch (status) {
            case "inactive":
                return <img src={inactiveLogo} alt=""/>
            case "recommendation":
                return <img src={recommendationLogo} alt=""/>
        }
    }
    return (
        <div className={`header-notify notify ${visibility ? "notify-visible" : ""}`}>
            <div className="notify-wrapper">
                {
                    notify.map(notifyItem => {
                        return (
                            <div key={notifyItem.id} className={`notify-item notify-${notifyItem.status}`}>
                                {correctImage(notifyItem.status)}
                                <div className="notify-content">
                                    <h4 className="notify-title">
                                        {notifyItem.title}
                                    </h4>
                                    <p className="notify-text">
                                        {notifyItem.text}
                                    </p>
                                    <span className="notify-date">
                                      {notifyItem.date}
                                  </span>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            <button className="blue-btn" onClick={removeNotify}>
                Очистить все
            </button>
        </div>
    )
}

export default Notify