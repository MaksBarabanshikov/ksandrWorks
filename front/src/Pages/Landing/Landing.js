import React from 'react';
import HeaderLanding from "./Components/Header";
import './Landing.scss'
import Welcome from "./Components/Welcome";

function Landing() {
    return (
        <>
            <HeaderLanding/>
            <Welcome/>
        </>
    );
}

export default Landing;