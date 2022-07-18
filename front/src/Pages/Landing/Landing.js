import React, {Suspense} from 'react';
import './Landing.scss'
import HeaderLanding from "./Components/Header";
import Welcome from "./Components/Welcome";
import WhyIPostX from "./Components/WhyIPostX/WhyIPostX";
import Form from "./Components/Form/Form";
import Video from "./Components/Video/Video";
import SpeedTest from "./Components/SpeedTest/SpeedTest";
import Blogs from "./Components/Blogs/Blogs";
import LandingFooter from "./Components/LandingFooter";

const LandingHashtags = React.lazy(() => import('./Components/Hashtags/LandingHashtags'))
const Helper = React.lazy(() => import('./Components/Phone/Phone'))
const LandingHelp = React.lazy(() => import('./Components/Help/LandingHelp'))
const Tariffs = React.lazy(() => import('./Components/Tariffs/Tariffs'))
const Reviews = React.lazy(() => import('./Components/Reviews/Reviews'))

function Landing() {
    return (
        <>
            <HeaderLanding/>
            <Welcome/>
            <WhyIPostX/>
            <Suspense fallback={null}>
                <LandingHashtags/>
            </Suspense>
            <Suspense fallback={null}>
                <Helper/>
            </Suspense>
            <Suspense fallback={null}>
                <LandingHelp/>
            </Suspense>
            <Form/>
            <Video/>
            <Suspense fallback={null}>
                <Tariffs/>
            </Suspense>
            <Suspense fallback={null}>
                <Reviews/>
            </Suspense>
            <SpeedTest/>
            <Blogs/>
            <LandingFooter/>
        </>
    );
}

export default Landing;