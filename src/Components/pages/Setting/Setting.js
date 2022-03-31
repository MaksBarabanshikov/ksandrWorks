import React from "react"
import "./Setting.scss"
import API from "./API";
import AddProxy from "./AddProxy";
import BuyProxy from "./BuyProxy";

const Setting = () => {
  return(
      <div className="setting">
          <API/>
          <AddProxy/>
          <BuyProxy/>
      </div>
  )
}

export default Setting