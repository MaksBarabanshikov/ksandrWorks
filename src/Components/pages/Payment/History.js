import downloadLogo from "../../../image/payment/download.svg"
import edit from "../../../image/mailing/edit.svg"
import trash from "../../../image/mailing/trash.svg"
import inputLogo from "../../../image/payment/ic_input.svg"
import outputLogo from "../../../image/payment/ic_output.svg"

const History = ({history}) => {

    const createType = type => {
        switch (type) {
            case "enrolment":
                return (
                    <div className="payment-type">
                        <div className={`payment-type-circle payment-type-${type}`}>
                            <img src={inputLogo} alt=""/>
                        </div>
                        <span>Зачисление</span>
                    </div>
                )
            case "withdrawal":
                return (
                    <div className="payment-type">
                        <div className={`payment-type-circle payment-type-${type}`}>
                            <img src={outputLogo} alt=""/>
                        </div>
                        <span>Вывод</span>
                    </div>
                )
        }
    }

    const createStatus = status => {
        switch (status) {
            case "waiting":
                return(
                    <div className={`payment-status payment-status-${status}`}>
                        Ожидание
                    </div>
                );
            case "completed":
                return (
                    <div className={`payment-status payment-status-${status}`}>
                        Завершено
                    </div>
                )
            case "error":
                return (
                    <div className={`payment-status payment-status-${status}`}>
                        Отклонено
                    </div>
                )
            case "canceled":
                return (
                    <div className={`payment-status payment-status-${status}`}>
                        Отменено
                    </div>
                )
        }
    }

    return (
        <div className="payment-history">
            <h4 className="payment-title">
                История транзакций
                <button className="purple-btn">
                    <img src={downloadLogo} alt=""/>
                    Скачать историю
                </button>
            </h4>
            <div className="payment-activity">
                <div className="payment-activity-title">
                    <div className="payment-cell">
                        <input type="checkbox"/>
                    </div>
                    <div className="payment-cell">
                        <span>Операция</span>
                    </div>
                    <div className="payment-cell">
                        <span>Дата</span>
                    </div>
                    <div className="payment-cell">
                        <span>Сумма</span>
                    </div>
                    <div className="payment-cell">
                        <span>Тип</span>
                    </div>
                    <div className="payment-cell">
                        <span>Статус</span>
                    </div>
                    <div className="payment-cell">
                        <div className="payment-buttons">
                            <button>
                                <img src={edit} alt=""/>
                            </button>
                            <button>
                                <img src={trash} alt=""/>
                            </button>
                        </div>
                    </div>

                </div>
                <div className="payment-activity-main">
                    {
                        history.map(transaction => {
                            return(
                                <div key={transaction.operation} className="payment-activity-transaction">
                                    <div className="payment-cell">
                                        <input type="checkbox"/>
                                    </div>
                                    <div className="payment-cell">
                                        {transaction.operation}
                                    </div>
                                    <div className="payment-cell">
                                        {transaction.date}
                                    </div>
                                    <div className="payment-cell">
                                        {transaction.sum}
                                    </div>
                                    <div className="payment-cell">
                                        { createType(transaction.type) }
                                    </div>
                                    <div className="payment-cell">
                                        { createStatus(transaction.status) }
                                    </div>
                                    <div className="payment-cell">
                                        <div className="payment-options">
                                            <span className="payment-options-circle"/>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default History