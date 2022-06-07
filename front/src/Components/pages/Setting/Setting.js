import React from "react"
import "./Setting.scss"
import API from "./API";
import AddProxy from "./AddProxy";
import BuyProxy from "./BuyProxy";
import Header from "../../header/Header";
import {faCog} from "@fortawesome/free-solid-svg-icons";

const Setting = () => {
  return(
      <>
          <Header title="Настройки" icon={faCog}/>
          <div className="setting">
              <API/>
              <AddProxy/>
              <BuyProxy/>
          </div>
      </>

  )
}

export default Setting