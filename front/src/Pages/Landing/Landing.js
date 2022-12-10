import React, {Suspense, useEffect} from 'react';
import './Landing.scss'
import HeaderLanding from "./Components/Header";
import Welcome from "./Components/Welcome";
import WhyIPostX from "./Components/WhyIPostX/WhyIPostX";
import Form from "./Components/Form/Form";
import Video from "./Components/Video/Video";
import SpeedTest from "./Components/SpeedTest/SpeedTest";
import LandingFooter from "./Components/LandingFooter";
import Loader from "../../Components/common/Loader";

const LandingHashtags = React.lazy(() => import('./Components/Hashtags/LandingHashtags'))
const Helper = React.lazy(() => import('./Components/Phone/Phone'))
const LandingHelp = React.lazy(() => import('./Components/Help/LandingHelp'))
const Tariffs = React.lazy(() => import('./Components/Tariffs/Tariffs'))
const Reviews = React.lazy(() => import('./Components/Reviews/Reviews'))
const Blogs = React.lazy(() => import('./Components/Blogs/Blogs'))

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
            <Suspense fallback={<Loader width={50} height={50}/>}>
                <Helper/>
                <LandingHelp/>
                <Form/>
                <Video/>
                <Tariffs/>
                <Reviews/>
                <SpeedTest/>
                {/*<Blogs/>*/}
            </Suspense>
            <LandingFooter/>
        </>
    );
}

export default Landing;