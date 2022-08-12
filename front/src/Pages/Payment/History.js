import edit from "../../Assets/image/edit.svg"
import trash from "../../Assets/image/trash.svg"
import inputLogo from "../../Assets/image/payment/ic_input.svg"
import outputLogo from "../../Assets/image/payment/ic_output.svg"
import {useEffect, useState} from "react";
import HistoryItem from "./HistoryItem";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faDownload} from "@fortawesome/free-solid-svg-icons/faDownload";

const History = ({history}) => {
    const [mainChecked, setMainChecked] = useState(false)
    const [transaction, setTransaction] = useState([...history])

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

    const handleSetMainChecked = () => {
        setMainChecked(!mainChecked)
    }

    const handleSetChecked = (operation) => {
        setTransaction(
            transaction.map(item => {
                if (item.operation === operation) {
                    item.checked = !item.checked
                }
                return item
            })
        )
    }

    const handleExportSession = () => {

        let selectedTransaction = []
        transaction.map(item => {
            if (item.checked) {
                selectedTransaction = [...selectedTransaction, item]
            }
        })
        alert(JSON.stringify(selectedTransaction, null, 2))
    }

    useEffect(() => {
        setTransaction(
            transaction.map(item => {
                item.checked = mainChecked
                return item
            })
        )
    },[mainChecked])

    return (
        <div className="payment-history">
            <div className="payment-history-cont">
                <div className="payment-history-body">
                    <h4 className="payment-title">
                        История транзакций
                        <button className="blue-btn" onClick={handleExportSession}>
                            <FontAwesomeIcon icon={faDownload}/>
                            Скачать историю
                        </button>
                    </h4>
                    <div className="payment-activity">
                        <div className="payment-activity-title">
                            <div className="payment-cell">
                                <input className="w-[24px] h-[24px]" type="checkbox" checked={mainChecked} onChange={ handleSetMainChecked }/>
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
                                history.map(transaction => (
                                    <HistoryItem
                                        key = {transaction.operation}
                                        transaction = {transaction}
                                        createType={createType}
                                        createStatus={createStatus}
                                        setChecked = {handleSetChecked}
                                    />
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default History