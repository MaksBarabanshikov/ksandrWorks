import React, { Suspense } from "react";
import testImg from "../../../../Assets/image/landing/test-image-slide.png"
import ReviewsItem from "./ReviewsItem";
import LandingNextArrow from "../LandingNextArrow";
import LandingPrevArrow from "../LandingPrevArrow";
import Slider from "react-slick";

const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    swipe: true,
    nextArrow: <LandingNextArrow/>,
    prevArrow: <LandingPrevArrow/>,
    responsive: [
        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                infinite: true,
            }
        },
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        }
    ]
}

const SliderMemo = React.memo(({ children }) => <Slider {...settings}>{children}</Slider>);

const ReviewsList = React.memo(() => {
    const list = [
        {
            id: 1,
            img: testImg,
            title: "хантер#001",
            date: '19.08.2022',
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. "
        },
        {
            id: 2,
            img: testImg,
            title: "хантер#001",
            date: '19.08.2022',
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. "
        },
        {
            id: 3,
            img: testImg,
            title: "хантер#001",
            date: '19.08.2022',
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. "
        },
        {
            id: 4,
            img: testImg,
            title: "хантер#001",
            date: '19.08.2022',
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. "
        },
        {
            id: 5,
            img: testImg,
            title: "хантер#001",
            date: '19.08.2022',
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. "
        },
        {
            id: 6,
            img: testImg,
            title: "хантер#001",
            date: '19.08.2022',
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. "
        },
        {
            id: 7,
            img: testImg,
            title: "хантер#001",
            date: '19.08.2022',
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. "
        },
    ]

    return (
        <Suspense fallback={null}>
            <SliderMemo>
                {
                    list.map(slide => <ReviewsItem key={slide.id} item={slide}/>)
                }
            </SliderMemo>
        </Suspense>

    )

})

export default ReviewsList