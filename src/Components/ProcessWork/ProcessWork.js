import Block from "../common/Block"
import ProcessList from "./ProcessList"
import "./ProcessWork.scss"
import Button from "../common/Button";

const ProcessWork = () => {
  return(
      <Block stylees = "process-work-main">
          <Block stylees="process-work right">
              <h5 className="title-main-block">
                  Процесс работы:
              </h5>
              <ProcessList/>
          </Block>
          <button className="red-btn">
              Стоп
          </button>
      </Block>
  )
}

export default ProcessWork