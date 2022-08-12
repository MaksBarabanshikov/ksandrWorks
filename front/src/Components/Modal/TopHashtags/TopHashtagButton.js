const TopHashtagButton = ({text, index, activeIndex, setIndex}) => {

    return (
        <div
            className={`
            ${activeIndex === index ? 'active' : ''}
             modal-hashtags_item blue-btn-invert border-gray text-center rounded-12
             `}
            onClick={() => setIndex(index)}
        >
            {text}
        </div>)
}


export default TopHashtagButton