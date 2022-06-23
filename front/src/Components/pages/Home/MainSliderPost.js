import React, {useEffect, useState} from "react";
import Slider from "react-slick";
import NewNextArrow from "../../common/NewNextArrow";
import NewPrevArrow from "../../common/NewPrevArrow";
import img from "../../../image/slider-test.jpg";
import img2 from "../../../image/logo.png";
import MiniSliderPost from "./MiniSliderPost";

const MainSliderPost = ({posts}) => {
    const [activeSlide, setActiveSlide] = useState(0)
    const [loading, setLoading] = useState(true)
    const [slide, setSlide] = useState([posts])

    let settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        swipe: false,
        nextArrow: <NewNextArrow/>,
        prevArrow: <NewPrevArrow/>,
        afterChange: current => setActiveSlide(current)
    }

    useEffect(() => {
        setSlide([posts])
        setLoading(false)
        console.log(posts)
    }, [posts])

    useEffect(() => {
        console.log(loading)
    },[loading])

    if (!posts.length) {
        if (loading) {
            return <span style={{textAlign: 'center', display: "block"}}>Загрузка...</span>
        }
        return <span style={{textAlign: 'center', display: "block"}}>Постов нет</span>
    } else {
        return (
            <>
                <Slider {...settings}>
                    {slide.map(post => (<div className="slider-post__item" key={post.id}>
                        <div className="slider-post__item-top">
                            <div className="post-slider__item-top_avatar">
                                <p>{post.username}</p>
                            </div>
                        </div>
                        <div className="slider-post__item-body">
                            {post.children ? <MiniSliderPost images={post.children.data}/> :
                                <div style={{backgroundImage: `url(${post.media_url})`}}
                                     className="slider-post__item-body_img"/>}
                        </div>
                        <div className="slider-post__item-bottom flex-column">
                            <span className="post-slider__item-like">
                                <strong>Нравится: {post.like_count}</strong>
                            </span>
                            <span className="post-slider__item-caption ">
                                <strong>{post.username}</strong> {post.caption}
                            </span>
                        </div>
                    </div>))}
                </Slider>
                <p>{activeSlide}</p>
            </>)
    }

    // if (slide.length) {
    //     return (
    //         <>
    //             <Slider {...settings}>
    //                 {posts.map(post => (<div className="slider-post__item" key={post.id}>
    //                     <div className="slider-post__item-top">
    //                         <div className="post-slider__item-top_avatar">
    //                             <p>{post.username}</p>
    //                         </div>
    //                     </div>
    //                     <div className="slider-post__item-body">
    //                         {post.children ? <MiniSliderPost images={post.children.data}/> :
    //                             <div style={{backgroundImage: `url(${post.media_url})`}}
    //                                  className="slider-post__item-body_img"/>}
    //                     </div>
    //                     <div className="slider-post__item-bottom flex-column">
    //                         <span className="post-slider__item-like">
    //                             <strong>Нравится: {post.like_count}</strong>
    //                         </span>
    //                         <span className="post-slider__item-caption ">
    //                             <strong>{post.username}</strong> {post.caption}
    //                         </span>
    //                     </div>
    //                 </div>))}
    //             </Slider>
    //             <p>{activeSlide}</p>
    //         </>)
    // }
}

export default MainSliderPost