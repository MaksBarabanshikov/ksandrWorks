import Accordion from "./Accordion";
import "./Faq.scss"
import {FaqData} from "../../Assets/StorageData/FaqData";
import Header from "../../Components/header/Header";
import React from "react";
import {faQuestionCircle} from "@fortawesome/free-regular-svg-icons";


const pagesNum = [
    {id: 0 , page: 1 , active: true},
    {id: 1 , page: 2 , active: false},
    {id: 2 , page: 3 , active: false}
]

const Faq = () => {

  return(
      <>
          <Header title="FAQ" icon={faQuestionCircle}/>
          <div className="faq">
              <div className="faq-container">
                  {FaqData.map(accordion => (
                      <Accordion key={accordion.id} title={accordion.title} content={accordion.content}/>
                  ))}

              </div>

              <ul className="faq-pages">

                  {pagesNum.map(pages => {
                      return(
                          <li key={pages.id} className={pages.active ? "active": null}>{pages.page}</li>
                      )
                  })}
              </ul>
          </div>
      </>

  )
}

export default Faq