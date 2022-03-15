import Sidebar from "./Components/sidebar/Sidebar";
import Routing from "./Components/Routes/Route";
import Block from "./Components/common/Block";
import "./App.scss";
import {useLocation} from "react-router-dom";
import {useLocationState} from "./hook/useLocationState";
import Header from "./Components/header/Header";
import Container from "./Components/common/Container";
import ProcessWork from "./Components/ProcessWork/ProcessWork";
import React from "react";

function App() {
    const location = useLocation()
    const [title] = useLocationState(location.pathname, location.state)

    return (
        <div className="App">
            <Sidebar/>
            <Block stylees="content">
                <Header title={title}/>
                <Container>
                    <Routing/>
                    <ProcessWork/>
                </Container>

            </Block>

        </div>
    );
}

export default App;
