import React, { useEffect } from 'react';
import './Landing.scss'
import HeaderLanding from "./Components/Header";
import Welcome from "./Components/Welcome";
import WhyIPostX from "./Components/WhyIPostX/WhyIPostX";
import Form from "./Components/Form/Form";
import Video from "./Components/Video/Video";
import SpeedTest from "./Components/SpeedTest/SpeedTest";
import Blogs from "./Components/Blogs/Blogs";
import LandingFooter from "./Components/LandingFooter";
import LandingHashtags from "./Components/Hashtags/LandingHashtags";
import Helper from "./Components/Phone/Phone";
import LandingHelp from './Components/Help/LandingHelp';
import Tariffs from './Components/Tariffs/Tariffs';
import Reviews from './Components/Reviews/Reviews';

function Landing() {
    useEffect(() => {
        document.querySelector('body').classList.add('landing')

        return () => document.querySelector('body').classList.remove('landing')
    }, [])

    return (
        <>
            <HeaderLanding/>
            <Welcome/>
            <WhyIPostX/>
            <LandingHashtags/>
            <Helper/>
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