import Button from "../../Components/common/Button";

const BuyProxy = () => {
    return (
        <div className="setting-buy-proxy">
            <span>
                Покупка прокси
            </span>
            <div className="setting-buy-proxy-row">
                <label>
                        <span>
                            Страна
                        </span>
                    <input name="apiCountry" type="text"/>
                </label>
                <label>
                        <span>
                            Количество
                        </span>
                    <input name="apiCount" type="text"/>
                </label>
                <Button>
                    Оплатить
                </Button>
                <div className="setting-buy-proxy-card card">
                    <div className="card-border"/>
                    <div className="card-text">
                        <span>Ваш баланс:</span>
                        <p>500 рублей</p>
                    </div>
                    <Button>
                        Пополнить счет
                    </Button>
                    <a className="setting-link" href="front/src/pages/Setting/BuyProxy#">
                        Способы оплаты
                    </a>
                </div>
            </div>
        </div>
    )
}

export default BuyProxy