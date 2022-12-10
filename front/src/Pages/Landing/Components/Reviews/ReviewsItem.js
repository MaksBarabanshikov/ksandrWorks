const ReviewsItem = ({item}) => {
    return (
        <div className="landing-reviews__item">
            <div className="landing-reviews__item_title flex align-center">
                <img src={item.img} alt=""/>
                <div>
                    <h3>{item.title}</h3>
                    <span>{item.date}</span>
                </div>
            </div>
            <div className="landing-reviews__item_content">
                {item.description}
            </div>
        </div>
    )
}

export default ReviewsItem