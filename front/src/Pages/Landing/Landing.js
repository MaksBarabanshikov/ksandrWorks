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
import Blogs from "./Components/Blogs/Blogs";
import LandingFooter from "./Components/LandingFooter";
import LandingHelp from "./Components/Help/LandingHelp";

function Landing() {
    return (
        <>
            <HeaderLanding/>
            <Welcome/>
            <WhyIPostX/>
            <LandingHashtags/>
            <Phone/>
            <LandingHelp/>
            <Form/>
            <Video/>
            <Tariffs/>
            <Reviews/>
            <SpeedTest/>
            <Blogs/>
            <LandingFooter/>
        </>
    );
}

export default Landing;