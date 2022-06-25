import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from 'react-redux'
import Slider from "react-slick";
import NewNextArrow from "../../common/NewNextArrow";
import NewPrevArrow from "../../common/NewPrevArrow";
import MiniSliderPost from "./MiniSliderPost";
import axios from "axios";
import {addPostId} from "../../../redux/modules/instaPostsSlice";

const MainSliderPost = () => {
    const [activeSlide, setActiveSlide] = useState(0)
    const posts = useSelector(state => state.instagramPosts.posts)
    const status = useSelector(state => state.instagramPosts.status)
    const id = useSelector(state => state.instagramPosts.id)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(addPostId('123123123'))
        if (posts.length) {
            dispatch(addPostId(posts[activeSlide].id))
        }
    },[activeSlide])

    useEffect(() => {
        if (posts.length) {
            axios.post('/api/hashtags/post-id', {
                    id: posts[activeSlide].id
                },
                {
                    headers: {
                        'Content-Type': 'application/json'
                    }
                })
                .then(res => {
                    console.log(res)
                })
                .catch(e => {
                    console.log(e)
                })
        }
    },[activeSlide])

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

    if (status === 'loading') {
        return (<span>Загрузка...</span>)
    } else if (!posts.length) {
        return <span>Постов нет</span>
    } else {
        return (<>
            <Slider {...settings}>
                {posts.map(post => (<div className="slider-post__item" key={post.id}>
                    <div className="slider-post__item-top">
                        <div className="post-slider__item-top_avatar">
                            <p>{post.username}</p>
                        </div>
                    </div>
                    <div className="slider-post__item-body">
                        {post.children.data ? <MiniSliderPost images={post.children.data}/> :
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
            <div className="slider-post__control flex align-center">
                    <span>
                        Выберите нужный пост
                    </span>
            </div>
        </>)
    }
}

export default MainSliderPost