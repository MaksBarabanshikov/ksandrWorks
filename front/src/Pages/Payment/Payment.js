import React from "react"
import {
    paymentRefillData,
    paymentRateData,
    paymentHistoryData
} from "../../Assets/StorageData/paymentData"
import History from "./History"
import Refill from "./Refill"
import Rate from "./Rate"
import "./Payment.scss"
import Header from "../../Components/header/Header";
import {faWallet} from "@fortawesome/free-solid-svg-icons/faWallet";

const Payment = () => {
  return(
      <>
          <Header title="Оплата" icon={faWallet}/>
          <div className="payment">
              {/*<Balance balance={ paymentBalanceData } />*/}
              <Refill refill={ paymentRefillData } />
              <Rate rate={paymentRateData} />
              <History history={paymentHistoryData} />
          </div>
      </>

  )
}

export default Payment