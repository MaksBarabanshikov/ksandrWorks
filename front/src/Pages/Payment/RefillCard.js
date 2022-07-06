import classNames from "classnames";

const RefillCard = ({type, img, handleSetCard, active}) => {

        return (
            <li
                className={classNames(`refill-card-${type}`, active.type === type ? "active" : null )}
                onClick={() => handleSetCard(type)}
            >
                <img src={img} alt=""/>
            </li>
        )
}

export default RefillCard