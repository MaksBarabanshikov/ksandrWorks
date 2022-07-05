import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from 'react-redux'
import Slider from "react-slick";
import NewNextArrow from "../../Components/common/NewNextArrow";
import NewPrevArrow from "../../Components/common/NewPrevArrow";
import MiniSliderPost from "./MiniSliderPost";
import axios from "axios";
import Loader from "../../Components/common/Loader";
import {useLazyGetInstagramPostsQuery} from "../../redux/services/hashtagsApi";
import {createFbPage} from "../../redux/modules/facebookSlice";

const MainSliderPost = () => {
    const fbPage = useSelector(state => state.facebook.user.fbPage)
    const [activeSlide, setActiveSlide] = useState(0)
    const [getInstagramPosts, {data: posts, isLoading, error, isSuccess}] = useLazyGetInstagramPostsQuery('Post')

    useEffect(() => {
        if (posts?.length && fbPage && !error) {
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
    }, [activeSlide, posts, isSuccess])

    useEffect(() => {
            getInstagramPosts()
    }, [fbPage])


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

    if (!fbPage) {
        return <span>Выполните вход в fb</span>
    }

    if (error) {
        return <h4 className="error-message">{error.data.message}</h4>
    }

    return (
        <>
            {isLoading && <Loader width={50} height={50}/>}
            {(posts && !posts.length) && <span>Постов нет, добавьте посты</span>}
            {posts?.length && <>
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
            </>}
        </>
    )

}

export default MainSliderPost