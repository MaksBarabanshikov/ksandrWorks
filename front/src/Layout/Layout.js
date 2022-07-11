import React from 'react';
import {Outlet, useLocation} from 'react-router-dom'
import NewSideBar from "../Components/newSideBar/newSideBar";
import Block from "../Components/common/Block";
import Container from "../Components/common/Container";

const Layout = () => {
    const location = useLocation()
    if (location.pathname === '/') {
        document.querySelector('body').classList.add('landing')
        return (
            <div className="App landing-wrapper">
                <Outlet/>
            </div>
        )
    } else {
        document.querySelector('body').classList.remove('landing')
        return (
            <>
                <div className="App">
                    <NewSideBar/>
                    <Block stylees="content">
                        <Container>
                            <Outlet/>
                        </Container>
                    </Block>
                </div>

            </>
        )
    }

}

export default Layout;