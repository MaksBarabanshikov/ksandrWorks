import React from 'react';
import HeaderLanding from "./Components/Header";
import './Landing.scss'
import Welcome from "./Components/Welcome";
import WhyIPostX from "./Components/WhyIPostX/WhyIPostX";
import LandingHashtags from "./Components/Hashtags/LandingHashtags";
import Phone from "./Components/Phone/Phone";
import Form from "./Components/Form/Form";
import Video from "./Components/Video/Video";
import Tariffs from "./Components/Tariffs/Tariffs";
import Reviews from "./Components/Reviews/Reviews";
import SpeedTest from "./Components/SpeedTest/SpeedTest";

function Landing() {
    return (
        <>
            <HeaderLanding/>
            <Welcome/>
            <WhyIPostX/>
            <LandingHashtags/>
            <Phone/>
            <Form/>
            <Video/>
            <Tariffs/>
            <Reviews/>
            <SpeedTest/>
        </>
    );
}

export default Landing;