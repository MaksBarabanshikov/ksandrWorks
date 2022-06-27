const HistoryItem = ({transaction, createStatus, createType, setChecked}) => {
  return(
      <div className={`payment-activity-transaction ${transaction.checked ? "checked" : "" }`}>
          <div className="payment-cell">
              <input type="checkbox"
                     checked={transaction.checked}
                     onChange={() => setChecked(transaction.operation)}
              />
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
}

export default HistoryItem