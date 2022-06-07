import React from "react";
import Slider from "react-slick";
import NewNextArrow from "../../common/NewNextArrow";
import NewPrevArrow from "../../common/NewPrevArrow";
import img from "../../../image/slider-test.jpg";
import img2 from "../../../image/logo.png";
import MiniSliderPost from "./MiniSliderPost";

const MainSliderPost = () => {

    let settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        swipe: false,
        nextArrow: <NewNextArrow/>,
        prevArrow: <NewPrevArrow/>
    }

    const images = [
        {
            id: "1",
            caption: "Подпись 1",
            like_count: 68,
            username: "Makson",
            media_url: img,
            children: {
                data: [{media_url: img, id: "1a"}, {media_url: img2, id: "2a"}]
            },
            timestamp: "123"
        },
        {
            id: "2",
            caption: "Подпись 2",
            like_count: 109,
            username: "Makson",
            media_url: img,
            timestamp: "123"
        },
        {
            id: "3",
            caption: "Подпись 3",
            like_count: 209,
            username: "Makson",
            media_url: img,
            timestamp: "123"
        },
        {
            id: "4",
            caption: "Подпись 4",
            like_count: 1234,
            username: "Makson",
            media_url: img,
            children: {
                data: [{media_url: img, id: "1a"}, {media_url: img2, id: "2a"}]
            },
            timestamp: "123"
        },
        {
            id: "5",
            caption: "Подпись 5",
            like_count: 3452,
            username: "Makson",
            media_url: img,
            children: {
                data: [{media_url: img, id: "1a"},
                    {media_url: img2, id: "2a"},
                    {media_url: img, id: "1a"},
                    {media_url: img2, id: "2a"},
                    {media_url: img, id: "1a"},
                    {media_url: img2, id: "2a"},
                    {media_url: img, id: "1a"},
                    {media_url: img2, id: "2a"},
                    {media_url: img, id: "1a"},
                    {media_url: img2, id: "2a"}]
            },
            timestamp: "123"
        },
    ]

    return (
        <Slider {...settings}>
            {images.map(post => (
                <div className="slider-post__item" key={post.id}>
                    <div className="slider-post__item-top">
                        <div className="post-slider__item-top_avatar">
                            <p>{post.username}</p>
                        </div>
                    </div>
                    <div className="slider-post__item-body">
                        {post.children ?
                            <MiniSliderPost images={post.children.data}/> :
                            <div style={{backgroundImage: `url(${post.media_url})`}}
                                 className="slider-post__item-body_img"/>
                        }
                    </div>
                    <div className="slider-post__item-bottom flex-column">
                            <span className="post-slider__item-like">
                                <strong>Нравится: {post.like_count}</strong>
                            </span>
                        <span className="post-slider__item-caption ">
                                <strong>{post.username}</strong> {post.caption}
                            </span>
                    </div>
                </div>
            ))}
        </Slider>
    )
}

export default MainSliderPost