import React from 'react';
import {Outlet, useLocation} from 'react-router-dom'
import NewSideBar from "../Components/newSideBar/newSideBar";
import Block from "../Components/common/Block";
import Container from "../Components/common/Container";

const Layout = () => {
    const location = useLocation()
    if (location.pathname === '/') {
        return (
            <div className="App">
                <Outlet/>
            </div>
        )
    }
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

export default Layout;