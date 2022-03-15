import Block from "../common/Block"
import ProcessList from "./ProcessList"
import "./ProcessWork.scss"

const ProcessWork = () => {
  return(
      <Block stylees="process-work right">
              <h5 className="title-main-block">
                  Процесс работы:
              </h5>
              <ProcessList/>
      </Block>
  )
}

export default ProcessWork