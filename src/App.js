import Sidebar from "./Components/sidebar/Sidebar";
import Routing from "./Components/Routes/Route";
import Block from "./Components/common/Block";
import "./App.scss";
import Header from "./Components/header/Header";
import Container from "./Components/common/Container";
import React from "react";

function App() {
    return (
        <div className="App">
                <Sidebar/>
                <Block stylees="content">
                    <Header title="Авторег"/>
                    <Container>
                        <Routing/>
                    </Container>
                </Block>
        </div>
    );
}

export default App;
