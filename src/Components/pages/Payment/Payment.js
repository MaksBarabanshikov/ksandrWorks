import React from "react"
import {
    paymentBalanceData,
    paymentRefillData,
    paymentRateData,
    paymentHistoryData
} from "../../../StorageData/paymentData"
import Balance from "./Balance"
import History from "./History"
import Refill from "./Refill"
import Rate from "./Rate"
import "./Payment.scss"
import Header from "../../header/Header";

const Payment = () => {
  return(
      <>
          <Header title="Оплата"/>
          <div className="payment">
              <Balance balance={ paymentBalanceData } />
              <Refill refill={ paymentRefillData } />
              <Rate rate={paymentRateData} />
              <History history={paymentHistoryData} />
          </div>
      </>

  )
}

export default Payment