import React, {useEffect} from 'react';
import {Outlet, useLocation} from 'react-router-dom'
import NewSideBar from "../Components/newSideBar/newSideBar";
import Block from "../Components/common/Block";
import Container from "../Components/common/Container";
import {RequireAuth} from "../hoc/RequireAuth";

const Layout = () => {
    const location = useLocation()

    if (location.pathname === '/') {
        return (
            <div className="App landing-wrapper">
                <Outlet/>
            </div>
        )
    }

    if (location.pathname === '/auth' || location.pathname === '/register') {
        return (
            <div className="App auth-wrapper">
                <Outlet/>
            </div>
        )
    }
    else {
        return (
            <RequireAuth>
                <div className="App">
                    <NewSideBar/>
                    <Block stylees="content">
                        <Container>
                            <Outlet/>
                        </Container>
                    </Block>
                </div>
            </RequireAuth>
        )
    }

}

export default Layout;