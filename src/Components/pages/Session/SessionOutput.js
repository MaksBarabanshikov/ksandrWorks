import Button from "../../common/Button";
import edit from "../../../image/result/rename.svg"
import trash from "../../../image/mailing/trash.svg"
import Avatar1 from "../../../image/chat/avatar.png"
import Avatar2 from "../../../image/chat/avatar2.png"
import Avatar3 from "../../../image/chat/avatar3.png"
import Avatar4 from "../../../image/chat/avatar4.png"
import "./SessionOutput.scss"

const sessionField = [
  {id: 0,img: Avatar1, fio: "Елисеев Е.Е", tel: "+79996669999", country: "Росиия", status: "Активен", days: 7, invite: 7, mailing: 7, type:"Внешний", reg: "02.02.2022"},
  {id: 1,img: Avatar2, fio: "Елисеев Е.Е", tel: "+79996669999", country: "Росиия", status: "Активен", days: 7, invite: 7, mailing: 7, type:"Внешний", reg: "02.02.2022"},
  {id: 2,img: Avatar3, fio: "Елисеев Е.Е", tel: "+79996669999", country: "Росиия", status: "Активен", days: 7, invite: 7, mailing: 7, type:"Внешний", reg: "02.02.2022"},
  {id: 3,img: Avatar4, fio: "Елисеев Е.Е", tel: "+79996669999", country: "Росиия", status: "Активен", days: 7, invite: 7, mailing: 7, type:"Внешний", reg: "02.02.2022"},
  {id: 4,img: Avatar1, fio: "Елисеев Е.Е", tel: "+79996669999", country: "Росиия", status: "Активен", days: 7, invite: 7, mailing: 7, type:"Внешний", reg: "02.02.2022"}
]

const SessionOutput = () => {
  return(
      <div className="session-container">
        <div className="session-top">
          <div className="session-top-title">
            <h5>
              Сессии:<span>5</span>
            </h5>
          </div>
          <Button>
            Проверить аккаунты
          </Button>
          <Button>
            Импорт
          </Button>
          <Button>
            Экспорт
          </Button>
        </div>
        <div className="session-middle">
            <span>Все</span>
            <button>
              <img src={edit} alt=""/>
            </button>
            <button>
              <img src={trash} alt=""/>
            </button>
          </div>
        <div className="session-bottom">
          <div className="session-bottom-title">
            <div className="session-cell">
              <input type="checkbox"/>
            </div>
            <div className="session-cell">
              <span>Фото</span>
            </div>
            <div className="session-cell">
              <span>ФИО</span>
            </div>
            <div className="session-cell">
              <span>Номер</span>
            </div>
            <div className="session-cell">
              <span>Страна</span>
            </div>
            <div className="session-cell">
              <span>Статус</span>
            </div>
            <div className="session-cell">
              <span>Дней</span>
            </div>
            <div className="session-cell">
              <span>Инвайтов</span>
            </div>
            <div className="session-cell">
              <span>Рассылок</span>
            </div>
            <div className="session-cell">
              <span>Тип</span>
            </div>
            <div className="session-cell">
              <span>Регистрация</span>
            </div>

          </div>
          <div className="session-main">
            {sessionField.map(session => {
              return (
                  <div key={session.id} className="session-main-row">
                    <div className="session-cell">
                      <input type="checkbox"/>
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
            })}
          </div>
        </div>
      </div>
  )
}

export default SessionOutput