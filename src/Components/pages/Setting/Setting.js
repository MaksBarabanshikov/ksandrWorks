import React from "react"
import "./Setting.scss"
import API from "./API";
import AddProxy from "./AddProxy";
import BuyProxy from "./BuyProxy";
import Header from "../../header/Header";

const Setting = () => {
  return(
      <>
          <Header title="Настройки"/>
          <div className="setting">
              <API/>
              <AddProxy/>
              <BuyProxy/>
          </div>
      </>

  )
}

export default Setting