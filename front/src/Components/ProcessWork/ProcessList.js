import Block from "../common/Block";
import {ProcessData} from "../../StorageData/ProcessData";
import checked from "../../image/processWork/check_ring_round_light.svg"
import unchecked from "../../image/processWork/not_check_ring_round_light.svg"

const ProcessList = () => {
        return(
            <ul className="process-work-list">
                {ProcessData.map(item => {
                    if (item.isReg) {
                        return <li key={Math.random()}>
                            <Block>
                                <p>Телефон {item.tel}</p>
                                <p>Зарегистрирован</p>
                            </Block>
                            <img src={checked} alt=""/>
                        </li>
                    } else {
                        return <li key={Math.random()}>
                            <Block>
                                <p>Телефон {item.tel}</p>
                                <p>не зарегистрирован</p>
                            </Block>
                            <img src={unchecked} alt=""/>
                        </li>
                    }
                })}
            </ul>
        )
}


export default ProcessList