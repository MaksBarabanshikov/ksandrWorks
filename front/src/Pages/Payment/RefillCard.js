import classNames from "classnames";

const RefillCard = ({type, img, handleSetCard, active}) => {

    const checkType = (type) => type === 'PayPal'
        ? <img width='22px' height='25px' src={img} alt=""/>
        : <img width='40px' height='40px' src={img} alt=""/>

        return (
            <li
                style={{height: 40, width: 70, padding: '13px 10px'}}
                className={classNames(`refill-card-${type}`, active.type === type ? "active" : null )}
                onClick={() => handleSetCard(type)}
            >
                {checkType(type)}
            </li>
        )
}

export default RefillCard