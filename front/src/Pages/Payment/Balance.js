const Balance = ({balance}) => {
  return(
      <div className="payment-balance">
          {
              balance.map(card => {
                  return (
                      <div key={card.type} className="payment-balance-card card">
                          <div className="card-block">
                              <h2>{card.money} Р </h2>
                              <span>{card.text}</span>
                          </div>
                          <button className="card-button-circle">
                              <img className="m-auto" src={card.img} alt={card.type}/>
                          </button>
                      </div>
                  )
              })
          }
      </div>
  )
}

export default Balance