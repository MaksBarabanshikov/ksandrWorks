import Button from "../../common/Button";

const Rate = ({rate}) => {
  return(
      <div className="payment-rate">
          <h4 className="payment-title">
             Тарифы
          </h4>
          <div className="payment-slider">
              <div className="payment-slider-wrapper">
                  {
                      rate.map(card => {
                          if (card.active) {
                              return(
                                  <div key={card.type} className="payment-slider-item active">
                                      <span className="payment-purple">
                                          Ваш тариф:
                                      </span>
                                      <Button>
                                          {card.type}
                                      </Button>
                                      <span className="payment-purple payment-slider-mb">
                                          Ежемесячный платеж по тарифу: 990 Р
                                      </span>
                                      <span className="payment-purple">
                                          В пакет включены:  Чекер, Рассылка, Инвайтинг, Парсинг.
                                      </span>
                                  </div>
                              )
                          }
                          else {
                              return(
                                  <div key={card.type} className="payment-slider-item">
                                      <span>
                                          Тариф: {card.type}
                                      </span>
                                      <Button>
                                          Сменить тариф
                                      </Button>
                                      <span className="payment-slider-mb">
                                          Ежемесячный платеж по тарифу: 990 Р
                                      </span>
                                      <span>
                                          В пакет включены:  Чекер, Рассылка, Инвайтинг, Парсинг.
                                      </span>
                                  </div>
                              )
                          }
                      })
                  }
              </div>
          </div>
      </div>
  )
}

export default Rate