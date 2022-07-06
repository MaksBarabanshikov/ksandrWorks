import classNames from "classnames";
import {useState} from "react";

const Accordion = ({title, content}) => {
    const [isActive, setIsActive] = useState(false)
    return (
        <div className={classNames("faq-item", isActive ? "active" : null)} onClick={() => setIsActive(!isActive)}>
            <div className="faq-item-title">
                <h4>
                    {title}
                </h4>
                <span className="faq-item-control"/>
            </div>
            <div className="faq-item-content">
                {content}
            </div>
        </div>
    )
}

export default Accordion