import Arrow from "../../image/down.svg"
import "./DropListArrow.scss"
import {useRef} from "react";


const DropListArrow = (props) => {
    const dropListRef = useRef()

    const handleSetVisible = () => {
        dropListRef.current.classList.toggle("active")
    }

    const handleSetTitle = (event) => {
        console.log(event.currentTarget.childNodes)
    }
    return(
        <div className="Drop-List" ref={dropListRef} onClick={handleSetVisible}>
            <div className="Drop-List-container">
                <div className="Drop-List-flex flex">
                    <img className="Drop-List-social" src={props.dropList[0].img} alt=""/>
                    Telegram
                </div>
                <img className="Drop-List-arrow" src={Arrow} alt="logo"/>
            </div>

            <div className="Drop-List-hide-list">
                <ul>
                    {
                        props.dropList.map(item => {
                            if (item.image !== null) {
                                return (
                                    <li key={item.text} className="Drop-List-hide-item" onClick={handleSetTitle}>
                                        <img className="Drop-List-social" src={item.img} alt=""/>
                                        <span>{item.text}</span>
                                    </li>
                                )
                            }

                            return (
                                <li key={item.text} className="Drop-list-hide-item">
                                    <span>{item.text}</span>
                                </li>
                            )

                        })
                    }
                </ul>
            </div>
        </div>
    )
}

export default DropListArrow