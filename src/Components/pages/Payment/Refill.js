const Refill = ({refill}) => {
    return (
        <div className="payment-refill">
            <h4 className="payment-title">
                Пополнение счета
            </h4>
            <div className="payment-refill-row">
                <div className="payment-refill-method">
                    <span>
                        Выберите способ пополнения счета:
                    </span>
                    <ul className="payment-refill-method-list">
                        {refill.map(card => {
                            if (card.type === "Visa") {
                                return (
                                    <li key={card.type} className="visa-invert">
                                        <img src={card.img} alt=""/>
                                    </li>
                                )
                            }
                            return (
                                <li key={card.type}>
                                    <img src={card.img} alt=""/>
                                </li>
                            )
                        })}
                    </ul>
                    <label>
                        <span>Введите сумму пополнения счета:</span>
                        <input name="amountOfPayment" type="text"/>
                    </label>
                </div>
                <div className="payment-refill-info">
                    <span>
                        Минимальная сумма пополнения счета составляет 200 рублей. Мы не берем комиссию со своих клиентов.
                        Комиссия банка-партнера будет указана на странице подтверждения оплаты.
                    </span>
                    <button className="payment-refill-button">
                        Пополнить счет
                    </button>
                    <a href="#">
                        Служба поддержки
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Refill